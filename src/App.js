import {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/protectedRoute/index'

import LoginPage from './components/login/index'
import Home from './components/home/index'
import {ThemeContext, SavedVideosContext} from './components/reactContext/index'
import VideoItemDetails from './components/videoItemDetails/index'
import Trending from './components/Trending/index'
import Gaming from './components/gamingPage/index'
import SavedVideos from './components/savedVideos/index'
import NotFound from './components/notFound/index'

import './App.css'

const menuSelectStatus = {
  initial: 'HOME',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED-VIDEOS',
}
class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideosList: [],
    menuStatus: menuSelectStatus.initial,
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  upadateSavedVideosList = VideoDetails => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, VideoDetails],
    }))
  }

  deleteItemFromSavedList = VideoDetails => {
    const {savedVideosList} = this.state
    const {id} = VideoDetails
    const updatedListAfterRemove = savedVideosList.filter(
      eachObj => eachObj.id !== id,
    )
    this.setState({savedVideosList: updatedListAfterRemove})
  }

  menuStatusChange = status => {
    this.setState({menuStatus: status})
  }

  render() {
    const {isDarkTheme, savedVideosList, menuStatus} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          changePageTheme: this.onChangeTheme,
          menuStatus,
          menuStatusChange: this.menuStatusChange,
        }}
      >
        <SavedVideosContext.Provider
          value={{
            savedVideosList,
            updateSavedView: this.upadateSavedVideosList,
            deleteListItem: this.deleteItemFromSavedList,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </SavedVideosContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App
