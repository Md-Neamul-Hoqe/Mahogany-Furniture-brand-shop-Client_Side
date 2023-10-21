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
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState(false);
  const [deletedId, setDeletedId] = useState("");
  // const [products, setProducts] = useState([]);

  /* set products in the cart associated to the id in the localStorage cart */
  const [cart, setCart] = useState([]);
  // const [favorite, setFavorite] = useState(false);
  const dataTheme = document.getElementsByTagName("html");

  // useEffect(() => {
  //   fetch(`http://127.0.0.1:5000/products`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //     });
  // }, []);

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

  /* onAuthStateChanged */
  useEffect(() => {
    const userState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
    });

    return () => {
      userState();
    };
  }, []);

  /* Get Cart from DB */
  useEffect(() => {
    fetch("http://127.0.0.1:5000/cart")
      .then((res) => res.json())
      .then((cartDB) => {
        console.log(cartDB);

        if (typeof cartDB === "object" && cartDB.length) setCart([...cartDB]);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleRemoveFromCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // visual cart remove
        const remainingCart = cart.filter((product) => product._id !== id);
        setCart(remainingCart);
        // remove from LS
        // removeFromLS(id);

        /* Remove from DB */
        fetch(`http://127.0.0.1:5000/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire(
                "Deleted!",
                "The product is removed from cart successfully.",
                "success"
              );
            }
          });
      }
    });
  };

  const handleAddToCart = (product) => {
    /* Set Bottle To The State */
    console.log(cart);
    const newCart = [...cart];

    const idxOfTheProduct = cart.indexOf(product);
    if (idxOfTheProduct > -1) {
      product.purchase = cart[idxOfTheProduct].purchase + 1;

      fetch(`http://127.0.0.1:5000/cart/${product._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount || data.upsertedCount)
            Swal.fire({
              title: `You selected ${product.purchase} pics of the product successfully.`,

              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },

              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
        });
    } else {
      /* for local state */
      product.purchase = 1;
      newCart.push(product);
      setCart(newCart);

      console.log(newCart);

      /* For database */
      fetch(`http://127.0.0.1:5000/cart`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged)
            Swal.fire({
              title: "The product added to your cart successfully.",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
        });
    }

    /* Set product id to the LS */
    // addToLS(product._id);

    // product._id &&
    //   Swal.fire({
    //     title: "The product added to the cart successfully.",
    //     showClass: {
    //       popup: "animate__animated animate__fadeInDown",
    //     },
    //     hideClass: {
    //       popup: "animate__animated animate__fadeOutUp",
    //     },
    //   });
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
