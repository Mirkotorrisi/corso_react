import axiosInstance from "./axiosInstance";

export const api = async ({ url, method, data }) => {
  try {
    const res = await axiosInstance({
      url,
      method,
      data,
    });
    return res.data;
  } catch (error) {
    console.log("🚀 ~ file: axiosInstance.ts:14 ~ error:", error);
  }
};
