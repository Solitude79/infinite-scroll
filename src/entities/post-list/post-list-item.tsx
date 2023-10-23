import { LinkList } from "../../app/app";
import { ButtonNav } from "../../features/button-nav/button-nav";
import "./post-list-item.css";

interface IPostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const PostListItem = (params: IPostItem) => {
  return (
    <div className="PostItem">
      <div className="PostItem__Content">
        <div className="PostItem__Content__Id">{params.id}</div>
        <div className="PostItem__Content__Title">{params.title}</div>
        <div className="PostItem__Content__Description">{params.body}</div>
      </div>
      <ButtonNav
        link={`/${LinkList.post}/${params.id}`}
        className={"PostItem__Button"}
        text={"Перейти"}
      />
      <div className="PostItem__Line"></div>
    </div>
  );
};
