import wxaccount from '@service.wxaccount';
import { quickPromiseFunctor } from '../tools';

const getType = wxaccount.getType;

const authorize = quickPromiseFunctor(wxaccount.authorize, 'success');

export default {
  getType,
  authorize,
}
