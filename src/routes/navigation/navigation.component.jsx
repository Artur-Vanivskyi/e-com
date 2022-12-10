import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import "./navigation.styles.scss";


const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link classname="nav-link" to="/shop">
            SHOP
          </Link>
          <Link classname="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
