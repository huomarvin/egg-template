import * as fs from "fs";
import * as path from "path";
import { Controller } from "egg";
import { write as awaitWriteStream } from "await-stream-ready";
import * as sendToWormhole from "stream-wormhole";

/**
 * @Controller 上传
 */
class UploadController extends Controller {
  /**
   * @summary 上传单个⽂文件
   * @description 上传单个⽂文件
   * @router post /api/upload/single
   * */
  async create() {
    const { ctx } = this;
    const stream = await this.ctx.getFileStream();
    console.log('stream.fields', stream);
    // 所有表单字段都能通过 `stream.fields` 获取到
    // const filename = path.basename(stream.filename); // ⽂文件名称
    const extname = path.extname(stream.filename).toLowerCase(); // ⽂文件扩展
    const uuid = (Math.random() * 999999).toFixed();
    // 组装参数 stream
    const target = path.join(
      this.config.baseDir,
      "app/public/uploads",
      `${uuid}${extname}`
    );
    const writeStream = fs.createWriteStream(target); // ⽂文件处理理，上传到云存储等等
    try {
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      // 必须将上传的⽂文件流消费掉，要不不然浏览器器响应会卡死
      await sendToWormhole(stream);
      throw err;
    }
    // 调⽤用 Service 进⾏行行业务处理理 // 设置响应内容和响应状态码
    ctx.helper.success({ ctx });
  }
}

export default UploadController;
