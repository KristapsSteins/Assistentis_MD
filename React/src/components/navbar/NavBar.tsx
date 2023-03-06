import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";

function NavBar() {
    return (
        <nav className={style.nav}>
            <NavLink 
                to="/" 
                className={({ isActive }) =>
                    isActive ? style.navItemActive : style.navItem
                }
            >
                Home
            </NavLink>
            <NavLink 
                to="/avatar"
                className={({ isActive }) =>
                    isActive ? style.navItemActive : style.navItem
                }
            >
                Avatar
            </NavLink>
            <NavLink 
                to="/video-player" 
                className={({ isActive }) =>
                    isActive ? style.navItemActive : style.navItem
                }
            >
                Video player
            </NavLink>
        </nav>
    );
}

export default NavBar;
