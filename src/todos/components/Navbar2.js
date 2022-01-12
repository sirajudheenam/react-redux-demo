import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
const Navbar2 = () => {
  const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return(
    <div>
      <nav style={{ background: theme.background, text: theme.text, height: '120px' }}>
        <h2 style={{ textAlign: 'center' }}>Oak Academy (function based)</h2>
          <p onClick={changeAuthStatus}
            style={{ textAlign: 'center' }}
           >
            {isLoggedIn ? "Logged In" : "Logged Out"}
          </p>
        <div className='ui three buttons'>
          <button className='ui button'>Overview</button>
          <button className='ui button'>Contact</button>
          <button className='ui button'>Support</button>
        </div>
      </nav>
    </div>
  )
};
export default Navbar2;
