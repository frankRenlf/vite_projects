// plugins/i18n.js
export default {
  install: (app: any, options: any) => {
    // 注入一个全局可用的 $translate() 方法
    app.config.globalProperties.$translate = (key: string) => {
      // 获取 `options` 对象的深层属性
      // 使用 `key` 作为索引
      // console.log("array", key.split("."));
      return key.split(".").reduce((o, i) => {
        // console.log("before", o, i);
        if (o) {
          // console.log(o, i, o[i]);
          return o[i];
        }
      }, options);
    };
  },
};
