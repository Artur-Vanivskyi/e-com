import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import "./navigation.styles.scss";
import { selectCurrentUser } from "../../store/user/user.secector";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  //const { currentUser } = useContext(UserContext);
  //useSelector -  gets the values for the whole app
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const isCartOpen = useSelector(selectIsCartOpen);


  const signOutUser = () => dispatch(signOutStart());


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
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
