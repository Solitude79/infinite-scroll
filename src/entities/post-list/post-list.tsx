import { GetJSON } from "../json-placeholder/json-placeholder";
import { $store, IPost, setStore } from "../../stores/store";
import { PostListItem } from "./post-list-item";
import { useEffect, useRef, useState } from "react";
import "./post-list.css";
import { useStore } from "effector-react";

export const PostList = () => {
  const store = useStore($store);
  const [isEndOfList, setIsEndOfList] = useState<boolean>(false);
  const postListBarRef = useRef<HTMLDivElement | null>(null);

  const fetchGetJSON = async () => {
    try {
      let result = await GetJSON();
      if (result) {
        result = store ? [...store,...result] : [...result]
        setStore(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (postListBarRef.current) {
        const postListBar = postListBarRef.current;
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const postListBottom = postListBar.offsetTop + postListBar.clientHeight;

        if (windowHeight + scrollTop >= postListBottom - 100) {
          setIsEndOfList(true);
        } else {
          setIsEndOfList(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (isEndOfList) {
      fetchGetJSON();
      setIsEndOfList(false);
    }
  }, [isEndOfList]);

  useEffect(() => {
    setStore(null);
    fetchGetJSON();
  }, []);
  return (
    <div className="PostList">
      <div className="PostList__Bar" ref={postListBarRef}>
        {store &&
          store.map((e: IPost, id: number) => (
            <PostListItem
              key={id}
              userId={e.userId}
              id={e.id}
              title={e.title}
              body={e.body}
            />
          ))}
      </div>
    </div>
  );
};
