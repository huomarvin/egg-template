import { Service } from "egg";

class UserService extends Service {
  /**
   * 创建⽤用户
   * @param {*} payload
   * */
  async create(payload) {
    const { ctx } = this;
    payload.password = await this.ctx.genHash(payload.password);
    return ctx.model.User.create(payload);
  }
  async findByMobile(mobile) {
    const { ctx } = this;
    console.log(ctx.model);
    return await ctx.model.User.findOne({
      mobile,
    });
  }
  async find(id) {
    return await this.ctx.model.User.findById(id);
  }
}

export default UserService;
