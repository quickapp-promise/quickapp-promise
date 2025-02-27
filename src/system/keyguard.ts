import keyguard from '@system.keyguard';
import { quickPromiseFunctor } from '../tools';

const getKeyguardLockedStatus = quickPromiseFunctor(keyguard.getKeyguardLockedStatus, 'success');

export default {
  getKeyguardLockedStatus,
}
