import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #f9f9f9;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardContainer = styled.div`
  width: 300px;
  background-color: #f9f9f9;
  padding: 40px;
  border: none;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 0px 5px #00000050;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const WebsiteLogo = styled.img`
  width: 100px;
  margin-bottom: 40px;
`

export const UserLabel = styled.label`
  font-size: 12px;
  color: #181818;
`

export const UserInputEl = styled.input`
  width: 100%;
  height: 35px;
  background-color: transparent;
  border: 1px solid #475569;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 12px;
  outline: none;
  border-radius: 4px;
  color: #000000;
`

export const InputContainer = styled.div`
  text-align: left;
`

export const LoginBtn = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  border-radius: 7px;
  border: 0px solid;
  color: #ffffff;
  background-color: #3b82f6;
`

export const ErrorParagraph = styled.p`
  color: #ff0b37;
  text-align: left;
  margin-top: 0px;
  font-size: 12px;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const CheckBoxInput = styled.input``
