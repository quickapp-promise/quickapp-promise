import prompt from '@system.prompt';
import { quickPromiseFunctor } from '../tools';

const showToast = prompt.showToast;

const showDialog = quickPromiseFunctor(prompt.showDialog, 'success');

const showContextMenu = quickPromiseFunctor(prompt.showContextMenu, 'success');

export default {
  showToast,
  showDialog,
  showContextMenu,
}
