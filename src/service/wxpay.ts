import wxpay from '@service.wxpay';
import { quickPromiseFunctor } from '../tools';

const getType = wxpay.getType;

const pay = quickPromiseFunctor(wxpay.pay, 'success');

export default {
  getType,
  pay,
}
