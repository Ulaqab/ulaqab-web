import axios, { AxiosPromise } from "axios";

function composeHeader() {
  const jwt = localStorage.getItem("jwt");
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: ""
  };
  if (jwt && jwt !== "") {
    header.Authorization = `Bearer ${jwt}`;
  }
  return header;
}

export function axiosGet(url: string, params: any = {}): AxiosPromise<any> {
  const headers = composeHeader();
  return axios({
    method: "GET",
    url,
    params,
    headers
  });
}

export function axiosPost(url: string, postData: string) {
  const headers = composeHeader();
  return axios({
    method: "POST",
    url,
    data: postData,
    headers
  });
}

export default {
  namespaced: true,
  get: axiosGet,
  post: axiosPost
};
