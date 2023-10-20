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
import { addToLS } from "../js/localStorage";
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
  //   fetch(`https://mahogany-furniture-server.vercel.app/products`)
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
    // removeFromLS(id);
  };

  /* Get Cart from DB */
  useEffect(() => {
    fetch(`https://mahogany-furniture-server.vercel.app/cart`)
      .then((res) => res.json())
      .then((cartDB) => {
        if (typeof cartDB === "object" && cartDB.length) setCart(...cartDB);
      });
  }, []);

  /* Load Cart from LS after products load in site */
  // const storedCartId = getStoredCart();
  // const uniqueIds = new Set(...[storedCartId]);

  // const savedCart = [];
  // for (const id of uniqueIds) {
  //   /* Get The Bottle id From Bottles */
  //   const product = products?.find((product) => product._id === id);

  //   if (product) {
  //     const Qty = storedCartId.filter((idInCart) => idInCart === id)?.length;

  //     product.quantity = Qty;

  //     savedCart.push(product);

  //     /* Save cart to state */
  //     setCart(savedCart);

  //     // fetch("https://mahogany-furniture-server.vercel.app/cart", {
  //     //   method: "POST",
  //     //   headers: {
  //     //     "content-type": "application/json",
  //     //   },
  //     //   body: JSON.stringify(savedCart),
  //     // })
  //     //   .then((res) => res.json())
  //     //   .then((data) => console.log(data));
  //     // // console.log("savedCart", savedCart);
  //   }
  // }

  const handleAddToCart = (product) => {
    /* Set Bottle To The State */
    const newCart = [...cart];

    if (cart.includes(product)) {
      const idxOfTheProduct = cart.indexOf(product);
      const quantity = cart[idxOfTheProduct].quantity++;

      product.quantity = quantity;

      console.log(quantity);

      const productQty = {
        quantity: quantity,
      };

      fetch(
        `https://mahogany-furniture-server.vercel.app/cart/${product._id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productQty),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount)
            Swal.fire({
              title: `The product quantity updated to your cart as ${quantity} successfully.`,

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
      product.quantity = 1;
      newCart.push(product);
      setCart(newCart);

      /* For database */
      fetch(`https://mahogany-furniture-server.vercel.app/cart`, {
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
