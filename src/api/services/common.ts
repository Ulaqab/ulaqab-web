import endpoints from "@/api/http/endpoints";
import { axiosGet } from "@/api/http/client";
import { Promise } from "q";

export function getChannels() {
  const url = `${endpoints.CHNNEL_LIST}`;
  return Promise((resolve, reject) => {
    axiosGet(url)
      .then((res: any) => resolve(res.data), error => reject(error))
      .catch(error => reject(error));
  });
}
