import {Link} from 'react-router-dom'

import {ThemeContext} from '../reactContext/index'

import {
  VideoCardContainer,
  Thumbnail,
  ThumbnailText,
  VideoTitle,
  VideoTextContainer,
  VideoDetailsContainer,
  VideoDetailsText,
} from './styledComponents'

const GamingBody = props => {
  const {videoDetails} = props
  const {thumbnailUrl, viewCount, title, id} = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'white'
        return (
          <VideoCardContainer>
            <Link to={`/videos/${id}`} className="link">
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <ThumbnailText>
                <VideoTextContainer>
                  <VideoTitle theme={theme}>{title}</VideoTitle>
                  <VideoDetailsContainer>
                    <VideoDetailsText>
                      {viewCount} Watching Worldwide
                    </VideoDetailsText>
                  </VideoDetailsContainer>
                </VideoTextContainer>
              </ThumbnailText>
            </Link>
          </VideoCardContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingBody
