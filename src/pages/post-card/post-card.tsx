import { ButtonNav } from "../../features/button-nav/button-nav";
import { LinkList } from "../../app/app";
import { useParams } from "react-router-dom";
import "./post-card.css";
import { $store, IPost } from "../../stores/store";
import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { findFirstPostById } from "../../stores/functions";

export const PostCard = () => {
  const { id } = useParams();
  const store = useStore($store);
  const [card, setCard] = useState<IPost | null>(null);
  useEffect(() => {
    if (store && id) {
      setCard(
        findFirstPostById({
          posts: store,
          idToFind: +id,
        })
      );
    }
    return () => {
      setCard(null);
    };
  }, [store, id]);
  return (
    <div className="PostCard">
      <div className="PostCard__Content">
        <div className="PostCard__Title">{card?.title}</div>
        <div className="PostCard__Description">{card?.body}</div>
      </div>
      <ButtonNav
        link={`/${LinkList.home}`}
        className={"PostCard__Button__Back"}
        text={"Назад"}
      />
    </div>
  );
};
