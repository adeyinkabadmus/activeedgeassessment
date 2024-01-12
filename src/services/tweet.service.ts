import { AxiosResponse } from "axios";
import http from "./http.service";
import { TweetEntity } from "../types/tweet.type";

const getAll = (): Promise<AxiosResponse> => {
  return http.get(`/comments`);
};

const deleteOne = (id: number): Promise<AxiosResponse> => {
  return http.delete(`/comments/${id}`);
};

const updateOne = (id: number, payload: TweetEntity): Promise<AxiosResponse> => {
  return http.put(`/comments/${id}`, payload);
};

const createOne = (payload: TweetEntity): Promise<AxiosResponse> => {
  return http.post(`/comments`, payload);
};

export {
  getAll,
  deleteOne,
  updateOne,
  createOne
};
