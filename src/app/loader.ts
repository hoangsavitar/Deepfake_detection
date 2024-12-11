import { useMutation, useQueryClient } from "react-query";
import { predict } from "./index.service";

const CACHE_KEYS = {
  detection: "INFOR_DATA_DETECTION",
};

export const usePredict = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: FormData) => {
      return predict(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(CACHE_KEYS.detection);
      },
    }
  );
};
