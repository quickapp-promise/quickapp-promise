import clipboard from '@system.clipboard';
import { quickPromiseFunctor } from '../tools';

const set = quickPromiseFunctor(clipboard.set, 'success');

const get = quickPromiseFunctor(clipboard.get, 'success');

export default {
  set,
  get,
}
