import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoSearchOutline} from 'react-icons/io5'
import {BsSearch} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {ThemeContext} from '../reactContext/index'
import VideoCard from '../homeVideoContent/index'
import MenuContainerComponent from '../menuContainer/index'
import Header from '../header/index'

import {
  HomeContentContainer,
  VideosContainer,
  CloseButton,
  GetItButton,
  BannerText,
  GetPremium,
  BannerLogo,
  VideosList,
  LoaderContainer,
  FailureImg,
  FailureContainer,
  FailureText,
  FailureTextp,
  RetryButton,
  NoVideosImg,
  NoVideosContainer,
  SearchInput,
  SearchContainer,
  SearchIcon,
  SearchIconButton,
  MenuSectionSidebar,
} from './styledComponents'
import './index.css'

const homeVideoStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN-PROGRESS',
  notFound: 'NOT-FOUND',
}

class Home extends Component {
  state = {
    showBanner: true,
    videosdataList: [],
    videoDisplayStatus: homeVideoStatus.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    const {searchInput} = this.state
    this.setState({videoDisplayStatus: homeVideoStatus.inProgress})
    const token = Cookies.get('jwt_token')
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(homeVideosApiUrl, options)
    if (response.ok) {
      const videosData = await response.json()

      if (videosData.total === 0) {
        this.setState({videoDisplayStatus: homeVideoStatus.notFound})
      } else {
        const formatedVideosData = videosData.videos.map(eachItem => ({
          id: eachItem.id,
          channel: {
            name: eachItem.channel.name,
            profileImageUrl: eachItem.channel.profile_image_url,
          },
          publishedAt: eachItem.published_at,
          thumbnailUrl: eachItem.thumbnail_url,
          title: eachItem.title,
          viewCount: eachItem.view_count,
        }))

        this.setState({
          videosdataList: formatedVideosData,
          videoDisplayStatus: homeVideoStatus.success,
        })
      }
    } else {
      console.log('failure')
      this.setState({videoDisplayStatus: homeVideoStatus.failure})
    }
  }

  renderView = isDarkTheme => {
    const {videoDisplayStatus} = this.state
    switch (videoDisplayStatus) {
      case homeVideoStatus.success:
        return this.successView()
      case homeVideoStatus.failure:
        return this.failureView(isDarkTheme)
      case homeVideoStatus.inProgress:
        return this.loaderView(isDarkTheme)
      case homeVideoStatus.notFound:
        return this.videoNotFoundView(isDarkTheme)
      default:
        return null
    }
  }

  successView = () => {
    const {videosdataList} = this.state
    return (
      <VideosList>
        {videosdataList.map(eachVideo => (
          <VideoCard videoDetails={eachVideo} key={eachVideo.id} />
        ))}
      </VideosList>
    )
  }

  videoNotFoundView = isDarkTheme => (
    <NoVideosContainer isDarkTheme={isDarkTheme}>
      <NoVideosImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailureText isDarkTheme={isDarkTheme}>
        No Search results found
      </FailureText>
      <FailureTextp isDarkTheme={isDarkTheme}>
        Try different key words or remove search filter
      </FailureTextp>
      <RetryButton type="button" onClick={this.getVideosData}>
        Retry
      </RetryButton>
    </NoVideosContainer>
  )

  failureView = isDarkTheme => {
    const theme = isDarkTheme ? 'dark' : 'light'
    const imgUrl = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <FailureContainer>
        <FailureImg src={imgUrl} alt="failure view" />
        <FailureText theme={isDarkTheme}>
          Oops! Something Went Wrong
        </FailureText>
        <FailureText theme={isDarkTheme} as="p">
          We are having some trouble to complete your request. Please try again.
        </FailureText>
        <RetryButton type="button" onClick={this.retryDataFetch}>
          Retry
        </RetryButton>
      </FailureContainer>
    )
  }

  loaderView = isDarkTheme => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDarkTheme ? '#ffffff' : '#000000'}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

  onClickCloseBanner = () => {
    this.setState({showBanner: false})
  }

  displayBanner = () => (
    <GetPremium data-testid="banner">
      <CloseButton
        type="button"
        data-testid="close"
        onClick={this.onClickCloseBanner}
      >
        <IoMdClose size={16} />
      </CloseButton>
      <BannerLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
      <GetItButton>GET IT NOW </GetItButton>
    </GetPremium>
  )

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  searchSection = isDarkTheme => {
    const {searchInput} = this.state
    const iconColor = isDarkTheme ? '#f9f9f9' : '#181818'
    return (
      <SearchContainer>
        <SearchInput
          isDarkTheme={isDarkTheme}
          placeholder="Search"
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <SearchIconButton
          isDarkTheme={isDarkTheme}
          data-testid="searchButton"
          type="button"
          onClick={this.getVideosData}
        >
          <BsSearch color={iconColor} />
        </SearchIconButton>
      </SearchContainer>
    )
  }

  render() {
    const {showBanner} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <HomeContentContainer
                data-testid="home"
                isDarkTheme={isDarkTheme}
              >
                <MenuContainerComponent />
                <VideosContainer>
                  {showBanner && this.displayBanner()}
                  {this.searchSection(isDarkTheme)}
                  {this.renderView(isDarkTheme)}
                </VideosContainer>
              </HomeContentContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
