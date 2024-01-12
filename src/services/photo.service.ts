import { AxiosResponse } from "axios";
import http from "./http.service";

const getByAlbum = (albumId: number): Promise<AxiosResponse> => {
  return http.get(`/albums/${albumId}/photos`);
};

export {
  getByAlbum
};
