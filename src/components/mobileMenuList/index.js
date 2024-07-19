import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {IoLogoGameControllerB} from 'react-icons/io'
import {RiMenuAddLine} from 'react-icons/ri'

import {ThemeContext} from '../reactContext/index'

import {MenuList, MenuLink, MenuHeading} from './styledComponents'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const MobileMenuItemsList = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, menuStatusChange, menuStatus} = value
      const theme = isDarkTheme ? 'dark' : 'light'
      const iconColor = isDarkTheme ? '#424242' : '#7e858e'

      return (
        <MenuList>
          <Link to="/" className="link">
            <MenuLink
              theme={theme}
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

              <MenuHeading theme={theme}>Home</MenuHeading>
            </MenuLink>
          </Link>
          <Link to="/trending" className="link">
            <MenuLink
              theme={theme}
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

              <MenuHeading theme={theme}>Trending</MenuHeading>
            </MenuLink>
          </Link>
          <Link to="/gaming" className="link">
            <MenuLink
              theme={theme}
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
              <MenuHeading theme={theme}>Gaming</MenuHeading>
            </MenuLink>
          </Link>

          <Link to="/saved-videos" className="link">
            <MenuLink
              theme={theme}
              isActive={activeMenuConstants.savedVideos === menuStatus}
              onClick={() => menuStatusChange(activeMenuConstants.savedVideos)}
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

              <MenuHeading theme={theme}>Saved videos</MenuHeading>
            </MenuLink>
          </Link>
        </MenuList>
      )
    }}
  </ThemeContext.Consumer>
)

export default MobileMenuItemsList
