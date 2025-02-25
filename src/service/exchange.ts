import exchange from '@service.exchange';
import { quickPromiseFunctor } from '../tools';

const get = quickPromiseFunctor(exchange.get, 'success');

const set = quickPromiseFunctor(exchange.set, 'success');

const remove = quickPromiseFunctor(exchange.remove, 'success');

const clear = quickPromiseFunctor(exchange.clear, 'success');

const grantPermission = quickPromiseFunctor(exchange.grantPermission, 'success');

const revokePermission = quickPromiseFunctor(exchange.revokePermission, 'success');

export default {
  get,
  set,
  remove,
  clear,
  grantPermission,
  revokePermission,
}
