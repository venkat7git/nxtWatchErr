import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 30%;
    margin-bottom: 20px;
    margin-right: 20px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;ssssss
`

export const ThumbnailText = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  text-decoration: 'none';
  font-size: 12px;
  font-family: 'Roboto';
`

export const ChannelLogo = styled.img`
  width: 20px;
`

export const VideoTitle = styled.p`
  margin: 0px;
  text-decoration: none;
  font-size:12px;
  font-family:'Roboto'
  &:active {
    text-decoration: none;
  }
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
`
export const VideoTextContainer = styled.div`
  margin-left: 5px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideoDetailsContainer2 = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideoDetailsText = styled.p`
  margin: 0px;
  margin-top: 8px;
  margin-right: 8px;
  font-size:12px;
  font-family:'Roboto'
  margin-bottom: 4px;
  color: #475569;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
 
`
