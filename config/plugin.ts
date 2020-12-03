import { EggPlugin } from "egg";

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  validate: {
    enable: true,
    package: "egg-validate",
  },
  swaggerdoc: {
    enable: true,
    package: "egg-swagger-doc-feat",
  },
  mongoose: {
    enable: true,
    package: "egg-mongoose",
  },
  bcrypt: {
    enable: true,
    package: "egg-bcrypt",
  },
  jwt: {
    enable: true,
    package: "egg-jwt",
  },
};

export default plugin;
