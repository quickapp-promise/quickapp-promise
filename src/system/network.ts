import network from '@system.network';
import { quickPromiseFunctor } from '../tools';

const getType = quickPromiseFunctor(network.getType, 'success');

const subscribe = network.subscribe;

const unsubscribe = network.unsubscribe;

const getSimOperators = quickPromiseFunctor(network.getSimOperators, 'success');

export default {
  getType,
  subscribe,
  unsubscribe,
  getSimOperators,
}
