export const actionType = {
  SET_USER: "SET_USER",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
  SET_CART_SHOW: "SET_CART_SHOW",
  SET_SHEEPPING_INFO: "SET_SHEEPPING_INFO",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionType.SET_FOOD_ITEMS:
      return {
        ...state,
        foodItems: action.foodItems,
      };

    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };

    case actionType.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };

    case actionType.SET_SHEEPPING_INFO:
      return {
        ...state,
        sheppingInfo: action.sheppingInfo,
      };

    default:
      return state;
  }
};

export default reducer;
