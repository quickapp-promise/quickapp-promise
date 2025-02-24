import QaVideo from "./video";

async function test() {
  const uri = 'https://test.mp4';
  
  const video = new QaVideo({ uri });
  const result1 = await video.compressVideo();
  result1.name === '';
  result1.size === '';
  result1.uri === '';

  video.abort();

  video.onprogressupdate = (data) => {
    data.progress
  };

  QaVideo.getVideoInfo({ uri });

  QaVideo.getVideoThumbnail({ uri });
}
