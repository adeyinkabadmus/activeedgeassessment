import { AxiosResponse } from "axios";
import http from "./http.service";

const getAll = (): Promise<AxiosResponse> => {
  return http.get(`/comments`);
};

export {
  getAll
};
