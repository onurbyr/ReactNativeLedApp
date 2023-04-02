import {get} from './axios';

export async function setStatus(value: 'on' | 'off') {
  return await get({
    status: value,
  });
}
