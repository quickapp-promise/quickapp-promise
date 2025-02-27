import texttoaudio from '@service.texttoaudio';
import { quickPromiseFunctor } from '../tools';

class QaTextToAudio {
  speak = quickPromiseFunctor(texttoaudio.speak, 'success');
  
  textToAudioFile = quickPromiseFunctor(texttoaudio.textToAudioFile, 'success');
  
  isLanguageAvailable = quickPromiseFunctor(texttoaudio.isLanguageAvailable, 'success');  

  set onttsstatechange(value: typeof texttoaudio.onttsstatechange) {
    texttoaudio.onttsstatechange = value;
  }

  stop = texttoaudio.stop;

  isSpeaking = texttoaudio.isSpeaking;
}

export default new QaTextToAudio();
