import { createEvent, createStore } from "effector";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const $store = createStore<IPost[] | null>(null);
export const setStore = createEvent<IPost[] | null>();
$store.on(setStore, (_, val) => val);
