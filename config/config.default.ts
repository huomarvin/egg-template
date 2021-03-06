import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1606973375034_7362";

  // add your egg config in here
  config.middleware = ["errorHandler"];

  config.swaggerdoc = {
    dirScanner: "./app/controller",
    apiInfo: {
      title: "Swagger Html",
      description: "Swagger html test",
      version: "1.0.0",
    },
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    enableSecurity: false,
    // enableValidate: true,
    routerMap: true,
    enable: true,
  };
  config.mongoose = {
    url: "mongodb://root:example@127.0.0.1:27017/admin",
    options: {
      useNewUrlParser: true,
      // useMongoClient: true,
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      bufferMaxEntries: 0,
    },
  };
  // config.jwt = {
  //   secret: "Great4-M",
  //   enable: true, // default is false
  //   match: /^\/api/, // optional
  // };
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
