export const baseRequest = {
  id: {
    type: "string",
    description: "id 唯⼀一键",
    required: true,
    example: "1",
  },
};

export const baseResponse = {
  code: { type: "integer", required: true, example: 0 },
  data: { type: "string", example: "请求成功" },
  errorMessage: { type: "string", example: "请求成功" },
};
