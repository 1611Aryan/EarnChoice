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
    --fontSans: 'DM Sans', sans-serif;
    --fontSerif: 'DM Serif Display', serif;

    //Login Colors
    --login-background: rgb(63, 102, 106, 0.36);
    --login-heading: #fff;
    --login-form-bg: #fff;
    --login-form-input-accent: #0006;
    --login-form-input-bg: #fff;
    --login-form-button-bg: #00adb5;
    --login-form-button-text: #fff;

    //dashboard colors
    --dashboard-background: #fff;
    --dashboard-heading: #000;
    --dashboard-text: #00adb5;
    --dashboard-button-bg: #00adb5;
    --dashboard-button-text: #fff;
    --dashboard-button-hover-bg: #00adb5;
    --dashboard-button-hover-text: #fff;
    --dashboard-button-active-bg: #00adb5;
    --dashboard-button-active-text: #fff;
    --dashboard-button-disabled-bg: #fff;
    --dashboard-button-disabled-text: #00adb5;
    --dashboard-button-disabled-hover-bg: #00adb5;
    --dashboard-button-disabled-hover-text: #fff;
    --dashboard-button-disabled-active-bg: #00adb5;
  }

  body {
    font-family: var(--fontSans);
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
