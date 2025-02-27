import qqaccount from '@service.qqaccount';
import { quickPromiseFunctor } from '../tools';

const getType = qqaccount.getType;

const authorize = quickPromiseFunctor(qqaccount.authorize, 'success');

export default {
  getType,
  authorize,
}
