import request from '@system.request';
import { quickPromiseFunctor } from '../tools';

const upload = quickPromiseFunctor(request.upload, 'success');

const download = quickPromiseFunctor(request.download, 'success');

const onDownloadComplete = quickPromiseFunctor(request.onDownloadComplete, 'success');

export default {
  upload,
  download,
  onDownloadComplete,
}
