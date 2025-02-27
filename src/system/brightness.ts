import brightness from '@system.brightness';
import { quickPromiseFunctor } from '../tools';

const getValue = quickPromiseFunctor(brightness.getValue, 'success');

const setValue = quickPromiseFunctor(brightness.setValue, 'success');

const getMode = quickPromiseFunctor(brightness.getMode, 'success');

const setMode = quickPromiseFunctor(brightness.setMode, 'success');

const setKeepScreenOn = quickPromiseFunctor(brightness.setKeepScreenOn, 'success');

export default {
  getValue,
  setValue,
  getMode,
  setMode,
  setKeepScreenOn,
}
