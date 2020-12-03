import { Controller } from "egg";

/**
 * @Controller 用户管理
 */
class User extends Controller {
  /**
   * @summary 创建用户
   * @description 创建用户，记录用户
   * @router post /api/user
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async create() {
    const { ctx, service } = this;
    const body = ctx.request.body || {};
    ctx.validate(ctx.rule.createUserRequest);
    const res = service.user.create(body);
    ctx.helper.success({ ctx, res });
  }
}

export default User;
