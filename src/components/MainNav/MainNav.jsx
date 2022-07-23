import { NavLink } from "react-router-dom";
import style from "./MainNav.module.scss";

export default function () {
  return (
      <nav className={style['main-nav']}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
  );
}
