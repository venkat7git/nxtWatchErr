import styled from 'styled-components'

export const MenuContainer = styled.ul`
  width: 300px;
  height: 100vh;
  padding: 20px;
  list-style-type: none;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f4f4f4')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const MenuItem = styled.p`
  margin-left: 10px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const MenuItemContainer = styled.li`
  color: #231f20;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-left: 0px;
  border-radius: 7px;
  background-color: ${props => (props.isActive ? props.themeBg : '')};
  padding: 7px;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const Menus = styled.div``

export const LogoIcons = styled.img`
  width: 25px;
  margin: 0px 6px 0px 0px;
`

export const ContactusContainer = styled.div`
  padding: 7px;
`

export const Text = styled.p`
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 14px;
`
