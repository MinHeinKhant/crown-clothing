export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem => {
      return cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  // const leftCartItems = cartItems.filter(cartItem => {
  //   if (cartItem.id === cartItemToRemove.id) {
  //     if (cartItem.quantity === 1) {
  //       return false;
  //     } else {
  //       return { ...cartItem, quantity: cartItem.quantity - 1 };
  //     }
  //   } else {
  //     return cartItem;
  //   }
  // });

  // return leftCartItems;
  // const cartItemsCopy = cartItems;

  const existingItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
