import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/navbar-log.svg";
import { NavbarStyled } from "./Navbar.styled";
const Navbar = () => {
  return (
    <NavbarStyled>
      <div className="container">
        <div className="navbar">
          <img src={Logo} alt="" className="navbar__logo" />
          <div className="navbar__header">
            <NavLink to="/">Mern cloud</NavLink>
          </div>
          <div className="navbar__login">
            <NavLink to="/login">Login</NavLink>
          </div>
          <div className="navbar__registration">
            <NavLink to="/register">Registration</NavLink>
          </div>
          <div className="navbar__registration">
            <NavLink to="/user">User</NavLink>
          </div>
        </div>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
