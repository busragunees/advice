
export const reducer = (state, action) => {
    switch (action.type) {
      case "toggle_button":
          console.log("state bu",state);
          console.log("action bu",action);
        return {
          ...state,
          active: state.active
        }
  
      default:
        return state
    }
  }
  
  export const initialState = {
    active: {id:0}
  }