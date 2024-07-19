import {Component} from 'react'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'
import MobileMenuItemsList from '../mobileMenuList/index'
import {ThemeContext} from '../reactContext/index'

import 'reactjs-popup/dist/index.css'

import {
  NavMobileContainer,
  HeaderLogoImg,
  NavMobileIcons,
  IconButton,
  CloseButton,
  NavLargeContainer,
  LogoutPopupContent,
  Button,
  ProfileIcon,
  NavLargeIcons,
  LargeLogoutButton,
  MenuPopupMobile,
  MenuListMobile,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, changePageTheme} = value

        const onChangeTheme = () => {
          changePageTheme()
          console.log('clicked')
        }
        const onClickChange = () => {
          console.log('hello')
        }

        const websiteLogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const theme = isDarkTheme ? 'dark' : 'light'
        const color = isDarkTheme ? 'white' : 'black'

        return (
          <>
            <NavMobileContainer theme={theme}>
              <Link to="/">
                <HeaderLogoImg src={websiteLogo} alt="website logo" />
              </Link>
              <NavMobileIcons>
                <IconButton
                  type="button"
                  data-testid="theme"
                  onClick={() => onChangeTheme()}
                >
                  {isDarkTheme ? (
                    <FiSun color="white" size={22} />
                  ) : (
                    <FaMoon size={22} />
                  )}
                </IconButton>

                <Popup
                  modal
                  className="popup-content"
                  trigger={
                    <IconButton type="button">
                      <GiHamburgerMenu color={color} size={22} />
                    </IconButton>
                  }
                >
                  {close => (
                    <MenuPopupMobile theme={theme}>
                      <CloseButton>
                        <IconButton type="button" onClick={() => close()}>
                          <IoMdClose size={20} color={color} />
                        </IconButton>
                      </CloseButton>
                      <MenuListMobile>
                        <MobileMenuItemsList />
                      </MenuListMobile>
                    </MenuPopupMobile>
                  )}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <IconButton type="button">
                      <FiLogOut color={color} size={22} />
                    </IconButton>
                  }
                  className="logout-popup"
                >
                  {close => (
                    <LogoutPopupContent theme={theme}>
                      <p>Are you sure, you want to logout</p>
                      <div>
                        <Button outline type="button" onClick={() => close()}>
                          Cancel
                        </Button>
                        <Button
                          bgColor="blue"
                          color="white"
                          type="button"
                          onClick={onClickLogout}
                        >
                          Confirm
                        </Button>
                      </div>
                    </LogoutPopupContent>
                  )}
                </Popup>
              </NavMobileIcons>
            </NavMobileContainer>
            <NavLargeContainer theme={theme}>
              <Link to="/">
                <HeaderLogoImg src={websiteLogo} alt="website logo" />
              </Link>
              <NavLargeIcons>
                <IconButton
                  type="button"
                  data-testid="theme"
                  onClick={onChangeTheme}
                >
                  {isDarkTheme ? (
                    <FiSun color="white" size={23} />
                  ) : (
                    <FaMoon size={23} />
                  )}
                </IconButton>

                <ProfileIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />

                <Popup
                  modal
                  trigger={
                    <LargeLogoutButton theme={theme} outline>
                      Logout
                    </LargeLogoutButton>
                  }
                  className="logout-popup"
                >
                  {close => (
                    <LogoutPopupContent theme={theme}>
                      <p>Are you sure, you want to logout</p>
                      <div>
                        <Button outline type="button" onClick={() => close()}>
                          Cancel
                        </Button>
                        <Button
                          bgColor="blue"
                          color="white"
                          type="button"
                          onClick={onClickLogout}
                        >
                          Confirm
                        </Button>
                      </div>
                    </LogoutPopupContent>
                  )}
                </Popup>
              </NavLargeIcons>
            </NavLargeContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
