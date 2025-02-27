import account from '@service.account';
import { quickPromiseFunctor } from '../tools';

const getProvider = account.getProvider;

const isLogin = quickPromiseFunctor(account.isLogin, 'success');

const authorize = quickPromiseFunctor(account.authorize, 'success');

const getProfile = quickPromiseFunctor(account.getProfile, 'success');

const getPhoneNumber = quickPromiseFunctor(account.getPhoneNumber, 'success');

const getEncryptedID = quickPromiseFunctor(account.getEncryptedID, 'success');

export default {
  getProvider,
  isLogin,
  authorize,
  getProfile,
  getPhoneNumber,
  getEncryptedID,
}
