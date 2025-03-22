import storage from '@system.storage';
import { quickPromiseFunctor, GetOptions } from '../tools';

class QaStorage {
  get(options: GetOptions<typeof storage['get']>) {
    return quickPromiseFunctor(storage.get, 'success')(options);
  }

  set(options: GetOptions<typeof storage['set']>) {
    return quickPromiseFunctor(storage.set, 'success')(options);
  }

  clear() {
    return quickPromiseFunctor(storage.clear, 'success')();
  }

  delete(options: GetOptions<typeof storage['delete']>) {
    return quickPromiseFunctor(storage.delete, 'success')(options);
  }

  key(options: GetOptions<typeof storage['key']>) {
    return quickPromiseFunctor(storage.key, 'success')(options);
  }

  get length() {
    return storage.length;
  }
}

export default new QaStorage();
