import { NavLink } from "react-router-dom";
import "./AppHeader.scss";

const AppHeader = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dictionary">Dictionary</NavLink>
        <NavLink to="/exercises">Exercises</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    </header>
  );
};

export default AppHeader;
