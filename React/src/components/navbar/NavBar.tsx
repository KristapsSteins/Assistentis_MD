import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";

function NavBar() {
    const activeStyle = {
        textDecoration: "underline",
    };

    return (
        <div>
            <nav className={style.nav}>
                <NavLink 
                    to="/" 
                    className={style.nav_item}
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/avatar" 
                    className={style.nav_item}
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Avatar
                </NavLink>
                <NavLink 
                    to="/video_player" 
                    className={style.nav_item}
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Video player
                </NavLink>
            </nav>
        </div>
    );
}

export default NavBar;
