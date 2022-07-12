import { Fragment, useContext, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

import "./navigation.style.css";

import { CartContext } from "../../contexts/cart.context";
import { UsersContext } from "../../contexts/users.context";

const Navigation = () => {

  const { setCartCount, setCartItems } = useContext(CartContext);

  const { isLogged, setIsLogged } = useContext(UsersContext);
  const { loggedUser, setLoggedUser } = useContext(UsersContext);

  const navigate = useNavigate();

  const onLogoutHandler = (e) => {
    e.preventDefault();
    setCartCount(0);
    setCartItems([]);
    setIsLogged(false);
    localStorage.removeItem("isLogged");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("cognomeUser");
    localStorage.removeItem("id");
    navigate("/login");
  };

  useEffect(() => {
    setLoggedUser(localStorage.getItem("loggedUser"))
  }, [])


  return (
    <Fragment>
      <div className="navigation">
        {isLogged && (
          <Fragment>

            <div className="loggedUser"><h4>{`Logged as :  ${loggedUser}`}</h4></div>

            <div className="nav-links-container">

            <Link className="nav-link" to="/">
                HOME
              </Link>
              <Link className="nav-link" to="/voli">
                VOLI
              </Link>
              <Link className="nav-link" to="/checkout">
                CHECKOUT
              </Link>
              <Link className="nav-link" to="/login" onClick={onLogoutHandler}>
                LOGOUT
              </Link>

            </div>
          </Fragment>
        )}

      </div>

      {/* An Outlet should be used in parent route elements to render their child route elements.
            This allows nested UI to show up when child routes are rendered. 
            If the parent route matched exactly, it will render a child index route or nothing if there is no index route. */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
