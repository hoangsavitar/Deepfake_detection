import { configAxios } from "../config/config-https";

export const predict = async (data: FormData) => {
  const url = `/predict`;
  const result = await configAxios.post(url, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return result.data;
};