import http from "./httpService";

export function getActions() {
    return http.get("http://localhost:3900/api/actions");
  }