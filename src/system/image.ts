import image from '@system.image';
import { quickPromiseFunctor } from '../tools';

const getImageInfo = quickPromiseFunctor(image.getImageInfo, 'success');

const compressImage = quickPromiseFunctor(image.compressImage, 'success');

const applyOperations = quickPromiseFunctor(image.applyOperations, 'success');

const editImage = quickPromiseFunctor(image.editImage, 'success');

const getExifAttributes = quickPromiseFunctor(image.getExifAttributes, 'success');

const setExifAttributes = quickPromiseFunctor(image.setExifAttributes, 'success');

export default {
  getImageInfo,
  compressImage,
  applyOperations,
  editImage,
  getExifAttributes,
  setExifAttributes,
}
