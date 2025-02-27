import screenshot from '@system.screenshot';
import { quickPromiseFunctor } from '../tools';

const onUserCaptureScreen = quickPromiseFunctor(screenshot.onUserCaptureScreen, 'callback');

const offUserCaptureScreen = screenshot.offUserCaptureScreen;

export default {
  onUserCaptureScreen,
  offUserCaptureScreen,
}
