import bluetooth from '@system.bluetooth';
import { quickPromiseFunctor } from '../tools';

class QaBluetooth {
  openAdapter = quickPromiseFunctor(bluetooth.openAdapter, 'success');

  closeAdapter = quickPromiseFunctor(bluetooth.closeAdapter, 'success');

  getAdapterState = quickPromiseFunctor(bluetooth.getAdapterState, 'success');

  set onadapterstatechange(value: typeof bluetooth.onadapterstatechange) {
    bluetooth.onadapterstatechange = value;
  }

  startDevicesDiscovery = quickPromiseFunctor(bluetooth.startDevicesDiscovery, 'success');

  stopDevicesDiscovery = quickPromiseFunctor(bluetooth.stopDevicesDiscovery, 'success');

  getDevices = quickPromiseFunctor(bluetooth.getDevices, 'success');

  set ondevicefound(value: typeof bluetooth.ondevicefound) {
    bluetooth.ondevicefound = value;
  }

  getConnectedDevices = quickPromiseFunctor(bluetooth.getConnectedDevices, 'success');

  createBLEConnection = quickPromiseFunctor(bluetooth.createBLEConnection, 'success');

  closeBLEConnection = quickPromiseFunctor(bluetooth.closeBLEConnection, 'success');

  getBLEDeviceServices = quickPromiseFunctor(bluetooth.getBLEDeviceServices, 'success');

  getBLEDeviceCharacteristics = quickPromiseFunctor(bluetooth.getBLEDeviceCharacteristics, 'success');

  readBLECharacteristicValue = quickPromiseFunctor(bluetooth.readBLECharacteristicValue, 'success');

  writeBLECharacteristicValue = quickPromiseFunctor(bluetooth.writeBLECharacteristicValue, 'success');

  notifyBLECharacteristicValueChange = quickPromiseFunctor(bluetooth.notifyBLECharacteristicValueChange, 'success');

  set onblecharacteristicvaluechange(value: typeof bluetooth.onblecharacteristicvaluechange) {
    bluetooth.onblecharacteristicvaluechange = value;
  }

  set onbleconnectionstatechange(value: typeof bluetooth.onbleconnectionstatechange) {
    bluetooth.onbleconnectionstatechange = value;
  }
}

export default new QaBluetooth();
