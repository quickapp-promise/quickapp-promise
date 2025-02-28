import media from '@system.media';
import { quickPromiseFunctor } from '../tools';

const takePhoto = quickPromiseFunctor(media.takePhoto, 'success');

const takeVideo = quickPromiseFunctor(media.takeVideo, 'success');

const pickImage = quickPromiseFunctor(media.pickImage, 'success');

const pickImages = quickPromiseFunctor(media.pickImages, 'success');

const pickVideo = quickPromiseFunctor(media.pickVideo, 'success');

const pickVideos = quickPromiseFunctor(media.pickVideos, 'success');

const pickFile = quickPromiseFunctor(media.pickFile, 'success');

const saveToPhotosAlbum = quickPromiseFunctor(media.saveToPhotosAlbum, 'success');

const previewImage = quickPromiseFunctor(media.previewImage, 'success');

const getRingtone = quickPromiseFunctor(media.getRingtone, 'success');

const setRingtone = quickPromiseFunctor(media.setRingtone, 'success');

export default {
  takePhoto,
  takeVideo,
  pickImage,
  pickImages,
  pickVideo,
  pickVideos,
  pickFile,
  saveToPhotosAlbum,
  previewImage,
  getRingtone,
  setRingtone,
}
