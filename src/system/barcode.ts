import barcode from '@system.barcode';
import { quickPromiseFunctor } from '../tools';

const scan = quickPromiseFunctor(barcode.scan, 'success');

export default {
  scan,
}
