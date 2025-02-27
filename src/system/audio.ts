import audio from '@system.audio';
import { quickPromiseFunctor } from '../tools';

class QaAudio {
  play() {
    audio.play();
  }

  pause() {
    audio.pause();
  }

  stop() {
    audio.stop();
  }

  getPlayState() {
    return quickPromiseFunctor(audio.getPlayState, 'success');
  }
  
  get src() {
    return audio.src;
  }

  set src(value) {
    audio.src = value;
  }

  get currentTime() {
    return audio.currentTime;
  }

  set currentTime(value) {
    audio.currentTime = value;
  }

  get duration() {
    return audio.duration;
  }

  get autoplay() {
    return audio.autoplay;
  }

  set autoplay(value) {
    audio.autoplay = value;
  }

  get loop() {
    return audio.loop;
  }

  set loop(value) {
    audio.loop = value;
  }

  get volume() {
    return audio.volume;
  }

  set volume(value) {
    audio.volume = value;
  }

  get muted() {
    return audio.muted;
  }

  set muted(value) {
    audio.muted = value;
  }

  get notificationVisible() {
    return audio.notificationVisible;
  }

  set notificationVisible(value) {
    audio.notificationVisible = value;
  }
  
  get title() {
    return audio.title;
  }

  set title(value) {
    audio.title = value;
  }

  get artist() {
    return audio.artist;
  }

  set artist(value) {
    audio.artist = value;
  }

  get cover() {
    return audio.cover;
  }

  set cover(value) {
    audio.cover = value;
  }

  get streamType() {
    return audio.streamType;
  }

  set streamType(value) {
    audio.streamType = value;
  }

  set onplay(value: typeof audio.onplay) {
    audio.onplay = value;
  }

  set onpause(value: typeof audio.onpause) {
    audio.onpause = value;
  }

  set onstop(value: typeof audio.onstop) {
    audio.onstop = value;
  }

  set onloadeddata(value: typeof audio.onloadeddata) {
    audio.onloadeddata = value;
  }

  set onended(value: typeof audio.onended) {
    audio.onended = value;
  }

  set ondurationchange(value: typeof audio.ondurationchange) {
    audio.ondurationchange = value;
  }

  set onerror(value: typeof audio.onerror) {
    audio.onerror = value;
  }

  set ontimeupdate(value: typeof audio.ontimeupdate) {
    audio.ontimeupdate = value;
  }

  set onprevious(value: typeof audio.onprevious) {
    audio.onprevious = value;
  }

  set onnext(value: typeof audio.onnext) {
    audio.onnext = value;
  }
}

export default new QaAudio();
