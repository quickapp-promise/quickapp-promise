import cipher from '@system.cipher';
import { quickPromiseFunctor } from '../tools';

const rsa = quickPromiseFunctor(cipher.rsa, 'success');

const aes = quickPromiseFunctor(cipher.aes, 'success');

export default {
  rsa,
  aes,
}
