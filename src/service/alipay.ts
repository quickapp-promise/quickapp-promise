import alipay from '@service.alipay';
import { quickPromiseFunctor } from '../tools';

const pay = quickPromiseFunctor(alipay.pay, 'callback');

export default {
  pay,
}
