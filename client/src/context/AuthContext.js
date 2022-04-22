import { createContext, useReducer } from "react";
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
  user: {
    _id: "625ff2bbc64f1d9e22f4e3a0",
    username:"john",
    email: "john@mail.com",
    profilePicture: "person/4.jpeg",
    coverPicture: "",
    isAdmin: false,
    followers:[],
    followings:[],
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
        {children}
    </AuthContext.Provider>
  );
};
