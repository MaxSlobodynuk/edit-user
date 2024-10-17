import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={css.navLink}>
          Edit Users
        </NavLink>
        <NavLink to="/users" className={css.navLink}>
          Users
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
