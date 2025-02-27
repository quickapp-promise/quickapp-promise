import contact from '@system.contact';
import { quickPromiseFunctor } from '../tools';

const pick = quickPromiseFunctor(contact.pick, 'success');

const list = quickPromiseFunctor(contact.list, 'success');

export default {
  pick,
  list,
}
