import { createGlobalStyle } from "styled-components";
import "../fonts.css";

const GlobalStyles = createGlobalStyle`

:root {
  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  --color-brand-50: #e5d5ff;
  --color-brand-100: #b3a0ff;
  --color-brand-200: #8080ff;
  --color-brand-300: #4d4dff;
  --color-brand-400: #1a1aff;
  --color-brand-500: #7270ff;
  --color-brand-600: #3535e6;
  --color-brand-700: #2f2fd3;
  --color-brand-800: #2828c6;
  --color-brand-900: #1c1cb7;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Geist", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default GlobalStyles;
