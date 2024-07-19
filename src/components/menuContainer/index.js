import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {IoLogoGameControllerB} from 'react-icons/io'
import {RiMenuAddLine} from 'react-icons/ri'
import {ThemeContext} from '../reactContext/index'
import './index.css'
import {
  MenuContainer,
  MenuItem,
  MenuItemContainer,
  ContactusContainer,
  Menus,
  LogoIcons,
  Text,
} from './styledComponents'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED-VIDEOS',
}

const MenuContainerComponent = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, menuStatusChange, menuStatus} = value
      const iconColor = isDarkTheme ? '#424242' : '#7e858e'
      const themeBgColor = isDarkTheme ? '#424242' : '#e2e8f0'

      return (
        <>
          <MenuContainer isDarkTheme={isDarkTheme}>
            <Menus>
              <Link to="/" className="link">
                <MenuItemContainer
                  themeBg={themeBgColor}
                  isActive={activeMenuConstants.home === menuStatus}
                  onClick={() => menuStatusChange(activeMenuConstants.home)}
                  key="HOME"
                >
                  <AiFillHome
                    className="menu-icon"
                    color={
                      activeMenuConstants.home === menuStatus
                        ? '#ff0b37'
                        : iconColor
                    }
                  />
                  <MenuItem isDarkTheme={isDarkTheme}>Home</MenuItem>
                </MenuItemContainer>
              </Link>
              <Link to="/trending" className="link">
                <MenuItemContainer
                  themeBg={themeBgColor}
                  isActive={activeMenuConstants.trending === menuStatus}
                  onClick={() => menuStatusChange(activeMenuConstants.trending)}
                  key="TRENDING"
                >
                  <AiFillFire
                    className="menu-icon"
                    color={
                      activeMenuConstants.trending === menuStatus
                        ? '#ff0b37'
                        : iconColor
                    }
                  />
                  <MenuItem isDarkTheme={isDarkTheme}>Trending</MenuItem>
                </MenuItemContainer>
              </Link>
              <Link to="/gaming" className="link">
                <MenuItemContainer
                  themeBg={themeBgColor}
                  isActive={activeMenuConstants.gaming === menuStatus}
                  onClick={() => menuStatusChange(activeMenuConstants.gaming)}
                  key="GAMING"
                >
                  <IoLogoGameControllerB
                    className="menu-icon"
                    color={
                      activeMenuConstants.gaming === menuStatus
                        ? '#ff0b37'
                        : iconColor
                    }
                  />
                  <MenuItem isDarkTheme={isDarkTheme}>Gaming</MenuItem>
                </MenuItemContainer>
              </Link>
              <Link to="/saved-videos" className="link">
                <MenuItemContainer
                  themeBg={themeBgColor}
                  isActive={activeMenuConstants.savedVideos === menuStatus}
                  onClick={() =>
                    menuStatusChange(activeMenuConstants.savedVideos)
                  }
                  key="SAVED_VIDEOS"
                >
                  <RiMenuAddLine
                    className="menu-icon"
                    color={
                      activeMenuConstants.savedVideos === menuStatus
                        ? '#ff0b37'
                        : iconColor
                    }
                  />
                  <MenuItem isDarkTheme={isDarkTheme}>Saved videos</MenuItem>
                </MenuItemContainer>
              </Link>
            </Menus>
            <ContactusContainer>
              <Text isDarkTheme={isDarkTheme}>CONTACT US</Text>
              <div>
                <LogoIcons
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <LogoIcons
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <LogoIcons
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </div>
              <Text isDarkTheme={isDarkTheme}>
                Enjoy! Now to see your channels and recommendations!
              </Text>
            </ContactusContainer>
          </MenuContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default MenuContainerComponent
