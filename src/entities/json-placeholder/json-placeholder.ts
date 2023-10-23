import axios from "axios";
import { IPost } from "../../stores/store";

export const GetJSON = async (): Promise<IPost[] | null> => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
};
