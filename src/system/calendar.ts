import calendar from '@system.calendar';
import { quickPromiseFunctor } from '../tools';

const insert = quickPromiseFunctor(calendar.insert, 'success');

export default {
  insert,
}
