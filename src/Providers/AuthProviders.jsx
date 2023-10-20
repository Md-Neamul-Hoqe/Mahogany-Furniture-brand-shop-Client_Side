import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import Swal from "sweetalert2";
import { addToLS, removeFromLS } from "../js/localStorage";
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState(false);
  const [deletedId, setDeletedId] = useState("");

  /* set products in the cart associated to the id in the localStorage cart */
  const [cart, setCart] = useState([]);
  // const [favorite, setFavorite] = useState(false);
  const dataTheme = document.getElementsByTagName("html");

  const toggleTheme = () => {
    theme
      ? dataTheme[0].setAttribute("data-theme", "light")
      : dataTheme[0].setAttribute("data-theme", "dark");
    return setTheme(!theme);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);

    const loggingOut = signOut(auth).then((res) => {
      if (!res)
        Swal.fire({
          title: "Log out successfully.(Firebase)",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
    });

    return () => loggingOut();
  };

  const signInGoogle = () => {
    setLoading(true);

    const googleProvider = new GoogleAuthProvider();

    const googlePopup = signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);

        Swal.fire({
          title: "User created successfully.(Firebase)",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch((error) => setError(error));

    return () => googlePopup();
  };

  useEffect(() => {
    const userState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
    });

    return () => {
      userState();
    };
  }, []);

  const handleRemoveFromCart = (id) => {
    // visual cart remove
    const remainingCart = cart.filter((product) => product._id !== id);
    setCart(remainingCart);
    // remove from LS
    removeFromLS(id);
  };

  const handleAddToCart = (product) => {
    /* Set Bottle To The State */
    console.log();
    const newCart = [...cart];

    if (cart.includes(product))
      cart.filter((theProduct) => theProduct === product).quantity++;
    else {
      newCart.push(product);
      setCart(newCart);
    }

    /* Set Bottle id to the LS */
    addToLS(product._id);

    product._id &&
      Swal.fire({
        title: "The product added to the cart successfully.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
  };

  const userInfo = {
    user,
    signIn,
    setUser,
    createUser,
    signInGoogle,
    loading,
    setLoading,
    toggleTheme,
    error,
    setError,
    theme,
    logOut,
    deletedId,
    setDeletedId,
    cart,
    setCart,
    handleRemoveFromCart,
    handleAddToCart,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

AuthProviders.propTypes = {
  children: PropTypes.node,
};
export default AuthProviders;
