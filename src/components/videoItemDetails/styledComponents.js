import styled from 'styled-components'

export const MainBody = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const SidebarContainer = styled.div`
  display: none;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f4f4f4')};
  @media screen and (min-width: 768px) {
    display: block;
    width: 15%;
    padding: 20px;
  }
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 10px;
`

export const FailureImg = styled.img`
  width: 80%;
  padding-top: 15px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const FailureText = styled.h1`
  margin: 0px;
  padding: 5px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  width: 100px;
  height: 30px;
  margin-top: 10px;
  border-radius: 5px;
`
export const LoaderContainer = styled.div`
  text-align: center;
`

export const VideoItemDetailsContainer = styled.div`
  height: 90vh;
  overflow-x: auto;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  flex-grow: 1;
  padding: 15px;
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    min-height: 90vh;
  }
`

export const VideoDetailContainer = styled.div`
  height: 140%;
  width: 100%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const PlayerContainer = styled.div`
  height: 500px;
  @media screen and (max-width: 768px) {
    height: 200px;
    width: 100%;
  }
`

export const VideoTextContainer = styled.div`
  margin: 0px;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
  }
`

export const VideoTitle = styled.p`
  margin: 0px;
  margin-top: 8px;
  font-weight: 500;
  font-size: 16px;
  font-family: Roboto;
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const LikesAndViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  color: #475569;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
  }
`

export const ViewsAndPostedContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ViewsText = styled.p`
  margin: 0px 10px 0px 0px;
  font-size: 14px;
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-family: Roboto;
  font-size: 12px;
  padding: 0px;
  margin-right: 10px;
  margin-top: 10px;
  padding-bottom: 10px;
  color: ${props => (props.theme === 'active' ? '#2563eb' : '#64748b')};
`

export const ChannelLogo = styled.img`
  width: 30px;
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`

export const ChannelDetailsText = styled.p`
  margin: 0px;
  padding-left: 15px;
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
  font-size: 14px;
  font-weight: bold;
`
export const ChannelDetailsText2 = styled(ChannelDetailsText)`
  color: #64748b;
  font-size:14px
  font-weight:bold;
`
export const VideoDescriptionText = styled.p`
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 600px;
`
export const LikesContainer = styled.div`
  display: flex;
`
