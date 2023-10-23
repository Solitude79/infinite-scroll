import "./button-nav.css";
import { NavLink } from "react-router-dom";
interface IButtonNav {
  link: string;
  className: string;
  text: string;
}
export const ButtonNav = (params: IButtonNav) => {
  return (
    <NavLink to={params.link} className={`${params.className} ButtonNav`}>
      {params.text}
    </NavLink>
  );
};
