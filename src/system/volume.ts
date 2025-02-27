import volume from '@system.volume';
import { quickPromiseFunctor } from '../tools';

const getMediaValue = quickPromiseFunctor(volume.getMediaValue, 'success');

const setMediaValue = quickPromiseFunctor(volume.setMediaValue, 'success');

export default {
  getMediaValue,
  setMediaValue,
}
