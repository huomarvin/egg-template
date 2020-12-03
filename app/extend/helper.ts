import * as moment from "moment";

export const formatTime = (time) => moment(time).format("YYYY-MM-DD HH:mm:ss");

export const success = ({ ctx, res = null, msg = "请求成功" }) => {
  console.log("success");
  ctx.body = {
    code: 0,
    data: res,
    msg,
  };
  ctx.status = 200;
};
