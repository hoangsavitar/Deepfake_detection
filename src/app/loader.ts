import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addModel,
  deleteModel,
  getHistory,
  getModels,
  modelTypes,
  predict,
  predictImage,
  savePrediction,
  updateModel,
} from "./index.service";
import { message } from "antd";

const CACHE_KEYS = {
  detection: "INFOR_DATA_DETECTION",
  predictions: "INFOR_DATA_PREDICTIONS",
  model: "INFOR_DATA_MODEL",
  modelType: "INFOR_DATA_MODEL_TYPE",
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

export const usePredictImage = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: FormData) => {
      return predictImage(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(CACHE_KEYS.detection);
      },
    }
  );
};

export const useGetHistory = () => {
  return useQuery(CACHE_KEYS.predictions, getHistory);
};

export const useGetModels = (data: any) => {
  return useQuery([CACHE_KEYS.model, data], () => getModels(data));
};

export const useGetModelType = () => {
  return useQuery(CACHE_KEYS.modelType, modelTypes);
};

export const useSavePrediction = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: any) => {
      return savePrediction(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(CACHE_KEYS.predictions);
      },
    }
  );
};

export const useAddModel = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: any) => {
      return addModel(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(CACHE_KEYS.model);
        message.success("Thêm model thành công!");
      },
      onError: () => {
        message.error("Thêm model thất bại!");
      },
    }
  );
};

export const useDeleteModel = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: any) => {
      return deleteModel(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(CACHE_KEYS.model);
        message.success("Xoá model thành công!");
      },
      onError: () => {
        message.error("Xoá model thất bại!");
      }
    }
  );
};

export const useUpdateModel = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (data: any) => {
      return updateModel(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(CACHE_KEYS.model);
        message.success("Cập nhật model thành công!");
      },
      onError: () => {
        message.error("Cập nhật model thất bại!");
      },
    }
  );
};