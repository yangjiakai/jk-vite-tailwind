export const validatePassword = (rule, value, callback) => {
  return callback(
    /^[a-zA-Z0-9]{6,16}$/.test(value) ? undefined : "请输入6-16位数字或字母"
  );
};
