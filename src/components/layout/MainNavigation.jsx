import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavContext from "../../store/favourite-context";
function MainNavigation() {
  const favCtx = useContext(FavContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        Wanderlust Dictionary
        <ul>
          <li>
            <Link to="/">World Destinations</Link>
          </li>

          <li>
            <Link to="/new-meet-up">New Destinations</Link>
          </li>
          <li>
            <Link to="/favourites">
              My Favorites
              <span className={classes.badge}>{favCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default MainNavigation;
