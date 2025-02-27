import alarm from '@system.alarm';
import { quickPromiseFunctor } from '../tools';

const setAlarm = quickPromiseFunctor(alarm.setAlarm, 'success');

const getProvider = alarm.getProvider;

const isAvailable = quickPromiseFunctor(alarm.isAvailable, 'success');

export default {
  setAlarm,
  getProvider,
  isAvailable,
}
