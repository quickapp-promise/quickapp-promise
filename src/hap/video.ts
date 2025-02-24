import Video, { type OnProgressUpdateCallback } from '@hap.io.Video';
import { quickPromiseFunctor } from '../tools';

export default class QaVideo {
  private instance: Video;

  constructor(options: ConstructorParameters<typeof Video>[0]) {
    this.instance = new Video(options);
  }

  /**
   * 对压缩任务注册进度监听
   */
  set onprogressupdate(value: OnProgressUpdateCallback) {
    this.instance.onprogressupdate = value;
  }

  /**
   * 执行压缩视频任务
   * @description
   * |错误码|说明|
   * |---|---|
   * |200|接口功能异常，可能原因：压缩任务已执行过 abort、系统版本过低(Android L 或以上才支持)|
   * |202|参数错误，可能原因：uri 不合法、所设宽高为奇数、所设码率已高于原码率、所设参数过低或过高超出设备支持范围|
   * |203|找不到任务实例|
   * |205|已发起了任务执行，无需再调用第二次|
   * |300|IO 错误|
   * |1001|原视频无效，可能原因：传来的文件不是视频|
   */
  compressVideo = () => {
    return quickPromiseFunctor(this.instance.compressVideo, 'success')();
  }

  /**
   * 放弃执行该压缩任务，若该压缩任务正在进行，则中断压缩进程。
   * @description
   * |错误码|说明|
   * |---|---|
   * |200|该任务已经执行完成或已被中断|
   * |203|找不到任务实例|
   */
  abort = () => {
    return quickPromiseFunctor(this.instance.abort, 'success')();
  }

  /**
   * 获取视频信息
   * @description
   * |错误码|说明|
   * |---|---|
   * |200|接口功能异常|
   * |202|参数错误|
   */
  static getVideoInfo = quickPromiseFunctor(Video.getVideoInfo, 'success');

  /**
   * 获取视频缩略图
   * @description
   * |错误码|说明|
   * |---|---|
   * |200|接口功能异常|
   * |202|参数错误|
   */
  static getVideoThumbnail = quickPromiseFunctor(Video.getVideoThumbnail, 'success');
}
