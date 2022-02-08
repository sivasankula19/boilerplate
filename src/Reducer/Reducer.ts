import user_Actions from "../Actions/Actions";
export interface IAppState {
  loginStatus: boolean;
  registerUser: [];
}

const initialState: IAppState = {
  loginStatus: false,
  registerUser: [],
};

const User = (state: IAppState = initialState, action: any) => {
  switch (action.type) {
    case "loginStatus": {
      return { ...state, loginStatus: action.payload };
    }
    case "registerUser": {
      let temp: any = state.registerUser;
      temp.push(action.payload);
      return { ...state, registerUser: temp };
    }
    case 'logOut' :{
      return initialState
    }
    default:
      return state;
  }
};

export default User;
