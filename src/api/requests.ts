import {get} from './axios';

export async function setStatus(value: 'on' | 'off') {
  return await get({
    status: value,
  });
}

export async function setColor(red: number, green: number, blue: number) {
  return await get({
    red: red,
    green: green,
    blue,
  });
}

export async function setBrightness(value: number) {
  return await get({
    brightness: value,
  });
}
