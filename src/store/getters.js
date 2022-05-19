const getters = {
  token: (state) => state.user.token,
  /**
   * @returns true 表示已存在用户信息
   */
  hashUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) != "{}";
  },
};

export default getters;
