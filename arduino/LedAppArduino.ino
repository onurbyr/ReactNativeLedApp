#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <ArduinoJson.h>

const char* ssid = "Your-SSID";
const char* password = "Your-Wifi-Password";

int blue = 14;   // GPIO14---D5 of NodeMCU
int red = 12;    // GPIO12---D6 of NodeMCU
int green = 13;  // GPIO13---D7 of NodeMCU
ESP8266WebServer server(80);
StaticJsonDocument<500> doc;

int rgbPrevious[3] = { 255, 255, 255 };

void setup() {
  Serial.begin(115200);
  delay(10);

  pinMode(red, OUTPUT);
  pinMode(green, OUTPUT);
  pinMode(blue, OUTPUT);

  // Connect to WiFi network
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");

  // Print the IP address
  Serial.print("Use this URL to connect: ");
  Serial.print("http://");
  Serial.print(WiFi.localIP());
  Serial.println("/");


  // Start the server
  server.on("/led", handle_Action);
  server.onNotFound(handle_NotFound);
  server.begin();
  Serial.println("HTTP Server Started");
}

void loop() {
  server.handleClient();
}

void handle_Action() {
  //Led ON-OFF
  if (server.hasArg("status")) {
    if (server.arg("status") == "on") {
      lightRGB(rgbPrevious[0], rgbPrevious[1], rgbPrevious[2]);
    }
    if (server.arg("status") == "off") {
      lightRGB(0, 0, 0);
    }
    //Api object update
    doc.clear();
    doc["status"] = server.arg("status");
  }
  //Brightness
  else if (server.hasArg("brightness")) {
    //Set brightness
    int brightnessValue = server.arg("brightness").toInt();
    float rBrValue = float(brightnessValue / 100.00) * rgbPrevious[0];
    float gBrValue = float(brightnessValue / 100.00) * rgbPrevious[1];
    float bBrValue = float(brightnessValue / 100.00) * rgbPrevious[2];
    lightRGB(rBrValue, gBrValue, bBrValue);
    //Api object update
    doc.clear();
    doc["brightness"] = server.arg("brightness");
  }
  //Color
  else if (server.hasArg("red") && server.hasArg("green") && server.hasArg("blue")) {
    //--Api object update
    doc.clear();
    JsonObject color = doc.createNestedObject("color");
    color["red"] = server.arg("red");
    color["green"] = server.arg("green");
    color["blue"] = server.arg("blue");
    //--
    lightRGB(server.arg("red").toInt(), server.arg("green").toInt(), server.arg("blue").toInt());
    //Rgb previous variable update
    rgbPrevious[0] = server.arg("red").toInt();
    rgbPrevious[1] = server.arg("green").toInt();
    rgbPrevious[2] = server.arg("blue").toInt();

  } else {
    handle_NotFound();
    return;
  }


  send_json();
}

void handle_NotFound() {
  String json;
  doc.clear();
  doc["error"] = "Not found";
  serializeJsonPretty(doc, json);
  server.send(404, "application/json", json);
}

void send_json() {
  String json;
  doc["success"] = true;
  serializeJsonPretty(doc, json);
  server.send(200, "application/json", json);
}

//Renk ayarla fonksiyonu oluşturduk
void lightRGB(int r, int g, int b) {
  analogWrite(red, r);
  analogWrite(green, g);
  analogWrite(blue, b);
}