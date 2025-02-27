import _share from '@service.share';
import { quickPromiseFunctor } from '../tools';

const getProvider = _share.getProvider;

const share = quickPromiseFunctor(_share.share, 'success');

const getAvailablePlatforms = quickPromiseFunctor(_share.getAvailablePlatforms, 'success');

export default {
  getProvider,
  share,
  getAvailablePlatforms,
}
