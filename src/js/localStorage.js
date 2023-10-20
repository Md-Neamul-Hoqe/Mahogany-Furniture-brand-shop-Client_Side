const getStoredCart = () => {
  const storedCartIdString = localStorage.getItem("cart");
  // console.log(storedCartIdString);
  if (storedCartIdString) {
    return JSON.parse(storedCartIdString);
  }
  return [];
};

const saveCartToLS = (cartId) => {
  const cartStringified = JSON.stringify(cartId);
  localStorage.setItem("cart", cartStringified);
};

const addToLS = (id) => {
  const cartId = getStoredCart();

  cartId.push(id);

  /* save to local storage */
  saveCartToLS(cartId);
};

const removeFromLS = (id) => {
  const cartId = getStoredCart();
  /* removing every id */
  const remaining = cartId.filter((idx) => id !== idx);
  saveCartToLS(remaining);
};

export { addToLS, getStoredCart, saveCartToLS, removeFromLS };
