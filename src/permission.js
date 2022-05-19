import router from "./router";
import store from "./store";

// 白名单
const whiteList = ["/login"];

// 路由前置守卫

router.beforeEach(async (to, from, next) => {
  // 存在 token ，进入主页
  // if (store.state.user.token) {
  // 快捷访问
  if (store.getters.token) {
    if (to.path === "/login") {
      next("/");
    } else {
      // 判断用户信息是否存在，如果不存在，则获取用户信息
      if (!store.getters.hashUserInfo) {
        store.dispatch("user/getUserInfo").then(() => {
          next();
        });
      }
      next();
    }
  } else {
    // 没有token的情况下，可以进入白名单
    if (whiteList.indexOf(to.path) > -1) {
      next();
    } else {
      next("/login");
    }
  }
});
