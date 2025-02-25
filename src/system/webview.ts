import webview from '@system.webview';
import { quickPromiseFunctor } from '../tools';

const loadUrl = webview.loadUrl;

const setCookie = quickPromiseFunctor(webview.setCookie, 'success');

export default {
  loadUrl,
  setCookie,
}
