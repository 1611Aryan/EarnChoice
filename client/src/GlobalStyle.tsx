import { Global, css } from '@emotion/react';

const style = css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    //constants
    --paddingInline: clamp(2rem, 4vw, 4rem);
    --paddingBlock: clamp(1rem, 2vw, 2rem);
    --padding: var(--paddingBlock) var(--paddingInline);

    //fonts

    --fontSerif: 'Arvo', serif;
    --fontSans: 'Open Sans', sans-serif;

    //Login Colors
    --login-background: rgb(0, 0, 0, 0.3);
    --login-heading: #000;
    --login-form-bg: transparent;
    --login-form-input-accent: #0006;
    --login-form-input-bg: #fff;
    --login-form-button-bg: #000;
    --login-form-button-text: #fff;

    //dashboard colors
    --dashboard-background: linear-gradient(to right, #131417, #000);
    --dashboard-white: #aeaeae;
    --dashboard-accent: #02c39a;
  }

  body {
    font-family: var(--fontSans);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--fontSerif);
  }

  input {
    color: inherit;
    font-family: inherit;
  }

  button,
  a {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  button,
  input {
    border: 0;
    &:focus {
      outline: 0;
    }
  }
`;

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;
