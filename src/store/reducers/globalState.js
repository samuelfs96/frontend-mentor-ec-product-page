export const InitialState = {
    zindexhidden: false,
};

export function globalState(state, action) {
    switch (action.type) {
      case "hidecarouselzindex":
        return { ...state, zindexhidden: action.zindexhidden };
      case "multiple":
        return { ...state, ...action };
      default:
        return state;
    }
  }