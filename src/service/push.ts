import push from '@service.push';
import { quickPromiseFunctor } from '../tools';

const getProvider = push.getProvider;

const subscribe = quickPromiseFunctor(push.subscribe, 'success');

const unsubscribe = quickPromiseFunctor(push.unsubscribe, 'success');

const on = push.on;

const off = push.off;

export default {
  getProvider,
  subscribe,
  unsubscribe,
  on,
  off,
}
