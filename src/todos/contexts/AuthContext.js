import React, { createContext, useState } from 'react';

export const AuthContext = createContext();
/*
class AuthContextProvider extends React.Component {
  state = {
    isLoggedIn: false
  };
  changeAuthStatus = () => {
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }
  render() {
    return(
      <AuthContext.Provider value={{ ...this.state, changeAuthStatus: this.changeAuthStatus }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
*/
/* function based version */
const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const changeAuthStatus = () => {
    setisLoggedIn(!isLoggedIn);
  }
    return(
      <AuthContext.Provider value={{ isLoggedIn, changeAuthStatus }}>
        {children}
      </AuthContext.Provider>
    )
}

export default AuthContextProvider;
