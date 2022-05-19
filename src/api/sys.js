import request from "@/utils/request";

/**
 * 登录
 * return promise
 */

export const login = (data) => {
  return request({
    url: "/sys/login",
    method: "post",
    data,
  });
};

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return request({
    url: "/sys/profile",
  });
};
