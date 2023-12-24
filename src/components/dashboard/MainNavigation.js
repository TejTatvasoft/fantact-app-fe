import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/allEvents"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              All EVENTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/eventDetials"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              PROFILE
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
