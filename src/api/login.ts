import { http } from ".";

export function fetchLogin(value) {
// TODO: 登陆
  return http.post("/login", value);
}
