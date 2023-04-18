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
