import { AxiosResponse } from "axios";
import http from "./http.service";

const getAll = (): Promise<AxiosResponse> => {
  return http.get('/users');
};

const getAlbums = (artistId: number): Promise<AxiosResponse> => {
  return http.get(`/albums?userId=${artistId}`);
};

export {
  getAll,
  getAlbums
};
