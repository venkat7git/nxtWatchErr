import Header from '../header/index'
import MenuContainerComponent from '../menuContainer/index'
import {ThemeContext} from '../reactContext/index'

import {
  MainBody,
  SidebarContainer,
  NotFoundImage,
  NotFoundContainer,
  NotFoundText,
  NotFoundTextp,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : 'light'

      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <div>
          <Header />
          <MainBody>
            <MenuContainerComponent />
            <NotFoundContainer theme={theme}>
              <NotFoundImage src={imgUrl} alt="not found" />
              <NotFoundText theme={theme}>Page Not Found</NotFoundText>
              <NotFoundTextp theme={theme}>
                we are sorry, the page you requested could not be found
              </NotFoundTextp>
            </NotFoundContainer>
          </MainBody>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
