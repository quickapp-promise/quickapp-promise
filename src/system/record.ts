import record from '@system.record';
import { quickPromiseFunctor } from '../tools';

class QaRecord {
  start = quickPromiseFunctor(record.start, 'success');

  set onframerecorded(value: typeof record.onframerecorded) {
    record.onframerecorded = value;
  }

  stop = record.stop;
}

export default new QaRecord();
