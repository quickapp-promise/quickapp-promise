import health from '@service.health';
import { quickPromiseFunctor } from '../tools';

const hasStepsOfDay = quickPromiseFunctor(health.hasStepsOfDay, 'success');

const getTodaySteps = quickPromiseFunctor(health.getTodaySteps, 'success');

const getLastWeekSteps = quickPromiseFunctor(health.getLastWeekSteps, 'success');

export default {
  hasStepsOfDay,
  getTodaySteps,
  getLastWeekSteps,
}
