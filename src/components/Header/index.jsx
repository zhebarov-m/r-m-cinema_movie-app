import { NavLink } from "react-router-dom";

import Search from "../Search";
import Favorites from "../Favorites";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/">
          <span id="r">Ray</span>&<span id="m">Mag</span> <br />
          <span className="cinema">cinema</span>
        </NavLink>
      </div>
      <Search />
      <Favorites />
    </header>
  );
}

export default Header;
