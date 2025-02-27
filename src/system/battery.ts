import battery from '@system.battery';
import { quickPromiseFunctor } from '../tools';

const getStatus = quickPromiseFunctor(battery.getStatus, 'success');

export default {
  getStatus,
}
