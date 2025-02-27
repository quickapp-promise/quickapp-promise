import telecom from '@system.telecom';
import { quickPromiseFunctor } from '../tools';

const getTelecomInfo = quickPromiseFunctor(telecom.getTelecomInfo, 'success');

export default {
  getTelecomInfo,
}
