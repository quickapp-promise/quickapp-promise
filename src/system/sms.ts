import sms from '@system.sms';
import { quickPromiseFunctor } from '../tools';

const send = quickPromiseFunctor(sms.send, 'success');

const readSafely = quickPromiseFunctor(sms.readSafely, 'success');

export default {
  send,
  readSafely,
}
