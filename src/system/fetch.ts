import _fetch from '@system.fetch';
import { quickPromiseFunctor } from '../tools';

const fetch = quickPromiseFunctor(_fetch.fetch, 'success');

export default {
  fetch,
}
