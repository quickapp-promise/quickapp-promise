import shortcut from '@system.shortcut';
import { quickPromiseFunctor } from '../tools';

const hasInstalled = quickPromiseFunctor(shortcut.hasInstalled, 'success');

const install = quickPromiseFunctor(shortcut.install, 'success');

export default {
  hasInstalled,
  install,
}
