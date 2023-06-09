export const InitialState = {
    zindexhidden: false,
    cartproducts: []
};

export function globalState(state, action) {
    switch (action.type) {
      case "hidecarouselzindex":
        return { ...state, zindexhidden: action.zindexhidden };
      case "additemtocart":
        return { ...state, cartproducts: action.cartproducts };
      case "clearCart":
        return { ...state, cartproducts: [] };
      default:
        return state;
    }
  }