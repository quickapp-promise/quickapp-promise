import app from '@system.app';
import { quickPromiseFunctor } from '../tools';

/**
 * 获取当前应用信息
 */
const getInfo = app.getInfo;

/**
 * 生成快应用分享二维码
 * [1070+]
 */
const createQuickAppQRCode = quickPromiseFunctor(app.createQuickAppQRCode, 'success');

export default {
  getInfo,
  createQuickAppQRCode,
}
