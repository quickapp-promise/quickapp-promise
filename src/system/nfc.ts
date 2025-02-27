import nfc from '@system.nfc';
import { GetOptions, quickPromiseFunctor } from '../tools';

class QaNdef {
  instance: nfc.Ndef.Ndef;

  constructor(adapter: nfc.Ndef.Ndef) {
    this.instance = adapter;
  }

  close() {
    return quickPromiseFunctor(this.instance.close, 'success', this.instance)();
  }

  connect() {
    return quickPromiseFunctor(this.instance.connect, 'success', this.instance)();
  }

  isConnected() {
    return quickPromiseFunctor(this.instance.isConnected, 'success', this.instance)();
  }

  setTimeout(options: GetOptions<typeof this.instance.setTimeout>) {
    return quickPromiseFunctor(this.instance.setTimeout, 'success', this.instance)(options);
  }

  writeNdefMessage(options: GetOptions<typeof this.instance.writeNdefMessage>) {
    return quickPromiseFunctor(this.instance.writeNdefMessage, 'success', this.instance)(options);
  }
}

class QaNfcA {
  instance: nfc.NfcA.NfcA;

  constructor(adapter: nfc.NfcA.NfcA) {
    this.instance = adapter;
  }

  close() {
    return quickPromiseFunctor(this.instance.close, 'success', this.instance)();
  }

  connect() {
    return quickPromiseFunctor(this.instance.connect, 'success', this.instance)();
  }

  getMaxTransceiveLength() {
    return quickPromiseFunctor(this.instance.getMaxTransceiveLength, 'success', this.instance)();
  }

  isConnected() {
    return quickPromiseFunctor(this.instance.isConnected, 'success', this.instance)();
  }

  setTimeout(options: GetOptions<typeof this.instance.setTimeout>) {
    return quickPromiseFunctor(this.instance.setTimeout, 'success', this.instance)(options);
  }

  transceive(options: GetOptions<typeof this.instance.transceive>) {
    return quickPromiseFunctor(this.instance.transceive, 'success', this.instance)(options);
  }

  getAtqa() {
    return quickPromiseFunctor(this.instance.getAtqa, 'success', this.instance)();
  }

  getSak() {
    return quickPromiseFunctor(this.instance.getSak, 'success', this.instance)();
  }
}

class QaNfcB {
  instance: nfc.NfcB.NfcB;

  constructor(adapter: nfc.NfcB.NfcB) {
    this.instance = adapter;
  }

  close() {
    return quickPromiseFunctor(this.instance.close, 'success', this.instance)();
  }

  connect() {
    return quickPromiseFunctor(this.instance.connect, 'success', this.instance)();
  }

  getMaxTransceiveLength() {
    return quickPromiseFunctor(this.instance.getMaxTransceiveLength, 'success', this.instance)();
  }

  isConnected() {
    return quickPromiseFunctor(this.instance.isConnected, 'success', this.instance)();
  }

  transceive(options: GetOptions<typeof this.instance.transceive>) {
    return quickPromiseFunctor(this.instance.transceive, 'success', this.instance)(options);
  }
}

class QaNfcF {
  instance: nfc.NfcF.NfcF;

  constructor(adapter: nfc.NfcF.NfcF) {
    this.instance = adapter;
  }

  close() {
    return quickPromiseFunctor(this.instance.close, 'success', this.instance)();
  }

  connect() {
    return quickPromiseFunctor(this.instance.connect, 'success', this.instance)();
  }

  getMaxTransceiveLength() {
    return quickPromiseFunctor(this.instance.getMaxTransceiveLength, 'success', this.instance)();
  }

  isConnected() {
    return quickPromiseFunctor(this.instance.isConnected, 'success', this.instance)();
  }

  setTimeout(options: GetOptions<typeof this.instance.setTimeout>) {
    return quickPromiseFunctor(this.instance.setTimeout, 'success', this.instance)(options);
  }

  transceive(options: GetOptions<typeof this.instance.transceive>) {
    return quickPromiseFunctor(this.instance.transceive, 'success', this.instance)(options);
  }
}

class QaNfcV {
  instance: nfc.NfcV.NfcV;

  constructor(adapter: nfc.NfcV.NfcV) {
    this.instance = adapter;
  }

  close() {
    return quickPromiseFunctor(this.instance.close, 'success', this.instance)();
  }

  connect() {
    return quickPromiseFunctor(this.instance.connect, 'success', this.instance)();
  }

  getMaxTransceiveLength() {
    return quickPromiseFunctor(this.instance.getMaxTransceiveLength, 'success', this.instance)();
  }

  isConnected() {
    return quickPromiseFunctor(this.instance.isConnected, 'success', this.instance)();
  }

  transceive(options: GetOptions<typeof this.instance.transceive>) {
    return quickPromiseFunctor(this.instance.transceive, 'success', this.instance)(options);
  }
}

class QaIsoDep {
  instance: nfc.IsoDep.IsoDep;

  constructor(adapter: nfc.IsoDep.IsoDep) {
    this.instance = adapter;
  }

  close() {
    return quickPromiseFunctor(this.instance.close, 'success', this.instance)();
  }

  connect() {
    return quickPromiseFunctor(this.instance.connect, 'success', this.instance)();
  }

  getHistoricalBytes() {
    return quickPromiseFunctor(this.instance.getHistoricalBytes, 'success', this.instance)();
  }

  getMaxTransceiveLength() {
    return quickPromiseFunctor(this.instance.getMaxTransceiveLength, 'success', this.instance)();
  }

  isConnected() {
    return quickPromiseFunctor(this.instance.isConnected, 'success', this.instance)();
  }

  setTimeout(options: GetOptions<typeof this.instance.setTimeout>) {
    return quickPromiseFunctor(this.instance.setTimeout, 'success', this.instance)(options);
  }

  transceive(options: GetOptions<typeof this.instance.transceive>) {
    return quickPromiseFunctor(this.instance.transceive, 'success', this.instance)(options);
  }
}

class QaMifareClassic {
  instance: nfc.MifareClassic.MifareClassic;

  constructor(adapter: nfc.MifareClassic.MifareClassic) {
    this.instance = adapter;
  }

  close() {
    return quickPromiseFunctor(this.instance.close, 'success', this.instance)();
  }

  connect() {
    return quickPromiseFunctor(this.instance.connect, 'success', this.instance)();
  }

  getMaxTransceiveLength() {
    return quickPromiseFunctor(this.instance.getMaxTransceiveLength, 'success', this.instance)();
  }

  isConnected() {
    return quickPromiseFunctor(this.instance.isConnected, 'success', this.instance)();
  }

  setTimeout(options: GetOptions<typeof this.instance.setTimeout>) {
    return quickPromiseFunctor(this.instance.setTimeout, 'success', this.instance)(options);
  }

  transceive(options: GetOptions<typeof this.instance.transceive>) {
    return quickPromiseFunctor(this.instance.transceive, 'success', this.instance)(options);
  }
}

class QaMifareUltralight {
  instance: nfc.MifareUltralight.MifareUltralight;

  constructor(adapter: nfc.MifareUltralight.MifareUltralight) {
    this.instance = adapter;
  }

  close() {
    return quickPromiseFunctor(this.instance.close, 'success', this.instance)();
  }

  connect() {
    return quickPromiseFunctor(this.instance.connect, 'success', this.instance)();
  }

  getMaxTransceiveLength() {
    return quickPromiseFunctor(this.instance.getMaxTransceiveLength, 'success', this.instance)();
  }

  isConnected() {
    return quickPromiseFunctor(this.instance.isConnected, 'success', this.instance)();
  }

  setTimeout(options: GetOptions<typeof this.instance.setTimeout>) {
    return quickPromiseFunctor(this.instance.setTimeout, 'success', this.instance)(options);
  }

  transceive(options: GetOptions<typeof this.instance.transceive>) {
    return quickPromiseFunctor(this.instance.transceive, 'success', this.instance)(options);
  }
}

class QaNFCAdapter {
  instance: nfc.NFCAdapter.NFCAdapter;

  constructor(adapter: nfc.NFCAdapter.NFCAdapter) {
    this.instance = adapter;
  }

  startDiscovery() {
    return quickPromiseFunctor(this.instance.startDiscovery, 'success', this.instance);
  }

  stopDiscovery() {
    return quickPromiseFunctor(this.instance.stopDiscovery, 'success', this.instance);
  }

  onDiscovered(options: nfc.NFCAdapter.OnDiscoveredOptions) {
    this.instance.onDiscovered(options);
  }

  offDiscovered() {
    this.instance.offDiscovered();
  }

  getNdef() {
    const ndef = this.instance.getNdef();
    return new QaNdef(ndef);
  }

  getNfcA() {
    const nfcA = this.instance.getNfcA();
    return new QaNfcA(nfcA);
  }

  getNfcB() {
    const nfcB = this.instance.getNfcB();
    return new QaNfcB(nfcB);
  }

  getNfcF() {
    const nfcF = this.instance.getNfcF();
    return new QaNfcF(nfcF);
  }

  getNfcV() {
    const nfcV = this.instance.getNfcV();
    return new QaNfcV(nfcV);
  }

  getIsoDep() {
    const isoDep = this.instance.getIsoDep();
    return new QaIsoDep(isoDep);
  }

  getMifareClassic() {
    const mifareClassic = this.instance.getMifareClassic();
    return new QaMifareClassic(mifareClassic);
  }

  getMifareUltralight() {
    const mifareUltralight = this.instance.getMifareUltralight();
    return new QaMifareUltralight(mifareUltralight);
  }
}

const getNFCAdapter = () => {
  const adapter = nfc.getNFCAdapter();
  return new QaNFCAdapter(adapter);
};

export default {
  getNFCAdapter,
}
