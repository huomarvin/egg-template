const errorHandler = (option, app) => async (ctx, next) => {
  try {
    console.log("option", option);
    await next();
  } catch (err) {
    // 所有的异常都在 app 上触发⼀一个 error 事件，框架会记录⼀一条错误⽇日志 app.emit('error', err, this)
    const status = err.status || 500;
    // ⽣生产环境时 500 错误的详细错误内容不不返回给客户端，因为可能包含敏敏感信息
    const error =
      status === 500 && app.config.env === "prod"
        ? "Internal Server Error"
        : err.message;
    // 从 error 对象上读出各个属性，设置到响应中
    ctx.body = {
      code: status, // 服务端⾃自身的处理理逻辑错误(包含框架错误500 及 ⾃自定义业务逻辑 错误533开始 ) 客户端请求参数导致的错误(4xx开始)，设置不不同的状态码
      error: error,
    };
    if (status === 422) {
      ctx.body.detail = err.errors;
    }
    ctx.status = 200;
  }
};

export default errorHandler;
