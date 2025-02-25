import file from '@system.file';
import { quickPromiseFunctor, GetOptions } from '../tools';

class QaFile {
  move(options: GetOptions<typeof file['move']>) {
    return quickPromiseFunctor(file.move, 'success')(options);
  }

  copy(options: GetOptions<typeof file['copy']>) {
    return quickPromiseFunctor(file.copy, 'success')(options);
  }

  list(options: GetOptions<typeof file['list']>) {
    return quickPromiseFunctor(file.list, 'success')(options);
  }

  get(options: GetOptions<typeof file['get']>) {
    return quickPromiseFunctor(file.get, 'success')(options);
  }

  delete(options: GetOptions<typeof file['delete']>) {
    return quickPromiseFunctor(file.delete, 'success')(options);
  }

  writeText(options: GetOptions<typeof file['writeText']>) {
    return quickPromiseFunctor(file.writeText, 'success')(options);
  }

  writeArrayBuffer(options: GetOptions<typeof file['writeArrayBuffer']>) {
    return quickPromiseFunctor(file.writeArrayBuffer, 'success')(options);
  }

  readText(options: GetOptions<typeof file['readText']>) {
    return quickPromiseFunctor(file.readText, 'success')(options);
  }

  readArrayBuffer(options: GetOptions<typeof file['readArrayBuffer']>) {
    return quickPromiseFunctor(file.readArrayBuffer, 'success')(options);
  }

  access(options: GetOptions<typeof file['access']>) {
    return quickPromiseFunctor(file.access, 'success')(options);
  }

  mkdir(options: GetOptions<typeof file['mkdir']>) {
    return quickPromiseFunctor(file.mkdir, 'success')(options);
  }

  rmdir(options: GetOptions<typeof file['rmdir']>) {
    return quickPromiseFunctor(file.rmdir, 'success')(options);
  }
}

export default new QaFile();
