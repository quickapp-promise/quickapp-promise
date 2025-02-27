import _pay from '@service.pay';
import { quickPromiseFunctor } from '../tools';

const getProvider = _pay.getProvider;

const pay = quickPromiseFunctor(_pay.pay, 'success');

export default {
  getProvider,
  pay,
}
