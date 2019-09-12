import { createGlobalStyle } from 'styled-components';
import breakpoints from './breakpoints';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamilyBase};  
    color: black;
  }
  ${ breakpoints.xlarge `
    color: red;
  `}
`

export default GlobalStyle;