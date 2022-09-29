import React, { useReducer } from "react";
import { createContext } from "react";

const initialState = {
  userName: null,
  isLogin: false,
};

const VALID = "VALID";
const IN_VALID = "IN_VALID";

const reducer = (state, action) => {
  switch (action.type) {
    case VALID:
      return {
        ...state,
        isLogin: true,
        user: action.payload.user,
      };
    case IN_VALID:
      return {
        ...state,
        isLogin: false,
        user: null,
      };
    default:
      return state;
  }
};

const AuthContext = createContext({ ...initialState });

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const userLogin = (username, callback) => {
    dispatch(
      {
        type: "VALID",
        payload: { user: { username } },
      },
      callback()
    );
  };

  const userLogout = (callback) => {
    dispatch({
      type: "IN_VALID",
    });
  };
  return (
    <AuthContext.Provider value={{ ...state, userLogin, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
