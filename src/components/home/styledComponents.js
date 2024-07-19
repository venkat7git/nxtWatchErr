import styled from 'styled-components'

export const HomeContentContainer = styled.div`
  display: flex;

  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const GetPremium = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const BannerLogo = styled.img`
  width: 120px;
`

export const BannerText = styled.p`
  font-family: Roboto;
  font-size: 16px;
`

export const GetItButton = styled.button`
  color: black;
  border: 1px solid black;
  background-color: transparent;
  width: 100px;
  padding: 7px;
  font-weight: 700;
  font-family: Roboto;
  font-size: 12px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
`

export const VideosList = styled.ul`
  list-style: none;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`
export const LoaderContainer = styled.div`
  text-align: center;
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
  font-size: 26px;
  margin: 0px;
  padding: 5px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`

export const FailureTextp = styled.p`
  margin: 0px;
  padding: 5px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  width: 100px;
  font-weight: bold;
  padding: 8px;
  margin-top: 10px;
  border-radius: 5px;
`

export const SearchInput = styled.input`
  width: 250px;
  height: 25px;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`

export const SearchContainer = styled.div`
  border: 1px solid #475569;
  padding: 5px;
  font-size: 12px;
  outline: none;
  border-radius: 7px;
  color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  width: 250px;
  margin-left: 20px;
  margin-top: 20px;
`

export const SearchIcon = styled.i`
  color: #ffffff;
`
export const SearchIconButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  width: 30px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`
export const NoVideosContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
export const MenuSectionSidebar = styled.div`
  width: 20%;
`

export const NoVideosImg = styled.img`
  width: 60%;
  padding-top: 15px;

  @media screen and (min-width: 768px) {
    width: 35%;
  }
`
