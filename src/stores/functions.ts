import { IPost } from "./store";

interface IFindFirstPostById {
  posts: IPost[];
  idToFind: number;
}
export function findFirstPostById(
  props: IFindFirstPostById
): IPost | null {
  for (const post of props.posts) {
    if (post.id === props.idToFind) {
      return post; // Возвращаем первый элемент с соответствующим id
    }
  }
  return null; // Возвращаем undefined, если элемент не найден
}
