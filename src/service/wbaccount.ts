import wbaccount from '@service.wbaccount';
import { quickPromiseFunctor } from '../tools';

const getType = wbaccount.getType();

const authorize = quickPromiseFunctor(wbaccount.authorize, 'success');

export default {
  getType,
  authorize,
}
