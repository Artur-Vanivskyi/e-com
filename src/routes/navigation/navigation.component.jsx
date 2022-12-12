import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import "./navigation.styles.scss";


const Navigation = () => {


  const {currentUser} = useContext(UserContext)

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
