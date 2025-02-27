import device from '@system.device';
import { quickPromiseFunctor } from '../tools';

class QaDevice {
  getInfo = quickPromiseFunctor(device.getInfo, 'success');

  getId = quickPromiseFunctor(device.getId, 'success');

  getDeviceId = quickPromiseFunctor(device.getDeviceId, 'success');

  getUserId = quickPromiseFunctor(device.getUserId, 'success');

  getAdvertisingId = quickPromiseFunctor(device.getAdvertisingId, 'success');

  getSerial = quickPromiseFunctor(device.getSerial, 'success');

  getTotalStorage = quickPromiseFunctor(device.getTotalStorage, 'success');

  getAvailableStorage = quickPromiseFunctor(device.getAvailableStorage, 'success');

  getCpuInfo = quickPromiseFunctor(device.getCpuInfo, 'success');

  getOAID = quickPromiseFunctor(device.getOAID, 'success');

  get platform() {
    return device.platform;
  }

  get host() {
    return device.host;
  }
}

export default new QaDevice();
