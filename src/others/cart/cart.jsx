export const addItemToCart = (cartItems,cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
     return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    // console.log(cartItems,cartItemToAdd.id)
  };
  
  export const removeItemToCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
  
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };
  export const filterItemFromCart = (cartItems, item) =>
  cartItems.filter(cartItem => cartItem.id !== item.id);

    export const getCartItemsCount =cartItem=> cartItem.reduce(
        (sum,cartItem)=>sum+cartItem.quantity,0
    )
    export const getCartTotal=cartItem=>cartItem.reduce(
        (sum,cartItem)=>sum+cartItem.price*cartItem.quantity,0
    )
  