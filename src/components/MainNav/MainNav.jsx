import { NavLink } from "react-router-dom";
import style from "./MainNav.module.scss";

const activeStyle = {
  borderBottom: "1px solid var(--pink)",
};

export default function () {
  return (
    <nav className={style['main-nav']}>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => isActive ? activeStyle : undefined}
            to="/">Home</NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => isActive ? activeStyle : undefined}
            to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
