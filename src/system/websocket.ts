import websocketfactory from '@system.websocketfactory';
import { quickPromiseFunctor, type GetOptions } from '../tools';

class QaWebsocket {
  instance: websocketfactory.WebSocket;

  constructor(websocket: websocketfactory.WebSocket) {
    this.instance = websocket;
  }

  send(options: GetOptions<websocketfactory.WebSocket['send']>) {
    return quickPromiseFunctor(this.instance.send, 'success', this.instance)(options);
  }

  close(options: GetOptions<websocketfactory.WebSocket['close']>) {
    return quickPromiseFunctor(this.instance.close, 'success', this.instance)(options);
  }

  set onopen(callback: websocketfactory.WebSocket['onopen']) {
    this.instance.onopen = callback;
  }

  set onmessage(callback: websocketfactory.WebSocket['onmessage']) {
    this.instance.onmessage = callback;
  }

  set onclose(callback: websocketfactory.WebSocket['onclose']) {
    this.instance.onclose = callback;
  }

  set onerror(callback: websocketfactory.WebSocket['onerror']) {
    this.instance.onerror = callback;
  }
}

const create = (options: websocketfactory.CreateOptions) => {
  const websocket = websocketfactory.create(options);

  return new QaWebsocket(websocket);
};

export default {
  create,
}
