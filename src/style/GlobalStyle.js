import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:  'Roboto', sans-serif;
  color: ${(props) => props.theme.blue900};
}

html,
:root {
  width: 100%;
  min-height: 100vh;
}

button,
a {
  cursor: pointer;
}

a, li{
  text-decoration: none;
  list-style: none;
  color: inherit;
}

button,
input {
  outline: none;
}

.container{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.content{
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
}



h2{
  
  font-family: 'Montserrat';
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

h3{
  font-family: 'Roboto';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

p{
  font-family: 'Roboto';
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

a{
  font-family: 'Montserrat';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
`
