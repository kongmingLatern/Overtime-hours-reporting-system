import { http } from ".";

// NOTE: 登陆
export function fetchLogin(value) {
  return http.post("/login", value);
}
