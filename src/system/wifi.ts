import wifi from '@system.wifi';
import { quickPromiseFunctor } from '../tools';

class QaWifi {
  connect = quickPromiseFunctor(wifi.connect, 'success');

  scan = quickPromiseFunctor(wifi.scan, 'success');

  getConnectedWifi = quickPromiseFunctor(wifi.getConnectedWifi, 'success');

  set onscanned(value: typeof wifi.onscanned) {
    wifi.onscanned = value;
  }

  set onstatechanged(value: typeof wifi.onstatechanged) {
    wifi.onstatechanged = value;
  }
}

export default new QaWifi();
