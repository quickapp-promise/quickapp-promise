import _share from '@system.share';
import { quickPromiseFunctor } from '../tools';

const share = quickPromiseFunctor(_share.share, 'success');

export default {
  share,
}
