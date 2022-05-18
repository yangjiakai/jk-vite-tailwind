import { login } from "@/api/sys";
import md5 from "md5";
import { setItem, getItem } from "@/utils/storage";
import { get } from "@vueuse/core";
import { TOKEN } from "@/contanst";

export default {
  // 单独模块，不会合并到子模块内部
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || "",
  }),
  mutations: {
    setToken(state, token) {
      state.token = token;
      setItem(TOKEN, token);
    },
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password),
        })
          .then((data) => {
            this.commit("user/setToken", data.token);
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};
