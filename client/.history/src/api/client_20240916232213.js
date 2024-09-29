/* eslint-disable no-param-reassign */
import axios from "axios";
import { LOCAL_API_HOST, MODEL_API_HOST} from "../constants";

export const localAxiosClient = axios.create({
  baseURL: LOCAL_URL,
});

// eslint-disable-next-line import/prefer-default-export
export const axiosClient = axios.create({
  baseURL: LOCAL_API_HOST,
});

// eslint-disable-next-line import/prefer-default-export
export async function localResolver(axiosResponse) {
  try {
    const response = await axiosResponse;

    if (response?.status === 200 || response?.status === 201) {
      return response;
    }
    return new Error("Error");
  } catch (e) {
    return new Error("Error");
  }
}

// eslint-disable-next-line import/prefer-default-export
export async function resolver(axiosResponse) {
  try {
    const response = await axiosResponse;

    if (response?.status === 200 || response?.status === 201) {
      return response;
    }
    return new Error("Error");
  } catch (e) {
    return new Error("Error");
  }
}
