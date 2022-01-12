import React from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';


class Navbar extends React.Component {
  render() {
    return(
      <AuthContext.Consumer>{ (authContext) => {
          return (
            <ThemeContext.Consumer>{(themeContext) => {
              const { isDarkTheme, darkTheme, lightTheme } = themeContext;
              const { isLoggedIn, changeAuthStatus } = authContext;
              const theme = isDarkTheme ? darkTheme : lightTheme;
                return(
                  <div>
                    <nav style={{ background: theme.background, text: theme.text, height: '120px' }}>
                      <h2 style={{ textAlign: 'center' }}>Oak Academy (class based)</h2>
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
                }
              }
            </ThemeContext.Consumer>
          )
        }
      }
    </AuthContext.Consumer>

    )
  }
}


export default Navbar;
