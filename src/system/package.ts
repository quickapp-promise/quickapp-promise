import pkg from '@system.package';
import { quickPromiseFunctor } from '../tools';

const hasInstalled = quickPromiseFunctor(pkg.hasInstalled, 'success');

const install = quickPromiseFunctor(pkg.install, 'success');

const getInfo = quickPromiseFunctor(pkg.getInfo, 'success');

const getSignatureDigests = quickPromiseFunctor(pkg.getSignatureDigests, 'success');

export default {
  hasInstalled,
  install,
  getInfo,
  getSignatureDigests,
}
