import { css } from 'styled-components';

const breakpoints = {
  xlarge: "(min-width : 1300px)",
  large: "(min-width: 1024px) and (max-width : 1300px)",
  medium: "(min-width: 768px) and (max-width:1024px)",
  small: "(max-width : 767px)"
}

let media = {};

Object.keys(breakpoints).map((key) => {
  media[key] = (...args) => css`@media only screen and ${breakpoints.key} { ${ css(...args) } }`
});

export default media;