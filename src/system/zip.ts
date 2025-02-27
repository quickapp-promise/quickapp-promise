import zip from '@system.zip';
import { quickPromiseFunctor } from '../tools';

const decompress = quickPromiseFunctor(zip.decompress, 'success');

export default {
  decompress,
}
