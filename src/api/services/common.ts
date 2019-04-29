import endpoints from "@/api/http/endpoints";
import { axiosGet, axiosPost } from "@/api/http/client";
import { Promise } from "q";

export function getChannels() {
  const url = `${endpoints.CHANNEL_LIST}`;
  return Promise((resolve, reject) => {
    axiosGet(url)
      .then((res: any) => resolve(res.data), error => reject(error))
      .catch(error => reject(error));
  });
}

export function getFeeds(params: any) {
  const url = `${endpoints.FEED_LIST}`;
  return Promise((resolve, reject) => {
    axiosGet(url, params)
      .then((res: any) => resolve(res.data), error => reject(error))
      .catch(error => reject(error));
  });
}

export function postFeed(params: string) {
  const url = `${endpoints.FEED_CREATE}`;
  return Promise((resolve, reject) => {
    axiosPost(url, params)
      .then((res: any) => resolve(res.data), error => reject(error))
      .catch(error => reject(error));
  });
}

export function updateFeed(params: string) {
  const url = `${endpoints.FEED_UPDATE}`;
  return Promise((resolve, reject) => {
    axiosPost(url, params)
      .then((res: any) => resolve(res.data), error => reject(error))
      .catch(error => reject(error));
  });
}
