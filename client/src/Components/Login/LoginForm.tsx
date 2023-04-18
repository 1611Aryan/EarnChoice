import styled from '@emotion/styled';

const LoginForm = () => (
  <StyledForm>
    <h2>Login Form</h2>
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        id="email"
        placeholder="Username"
      />
      <span className="hover"></span>
    </div>
    <div className="form-group">
      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="Password"
      />
      <span className="hover"></span>
    </div>
    <button type="submit" className="btn btn-primary">
      Login
    </button>
  </StyledForm>
);

const StyledForm = styled.form`
  --input-hover-height: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 35%;
  height: auto;
  aspect-ratio: 1/1.05;
  background: var(--login-form-bg);

  padding: var(--paddingBlock) calc(var(--paddingInline) / 1.5);

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  font-size: clamp(0.8rem, 2vw, 1rem);
  box-shadow: inset 2px 2px 10px rgb(0, 0, 0, 0.07),
    inset 2px -2px 10px rgb(0, 0, 0, 0.07),
    inset 2px -2px 10px rgb(0, 0, 0, 0.07),
    inset -2px -2px 10px rgb(0, 0, 0, 0.07);
  h2 {
    font-size: 2.2em;
    font-weight: 500;
  }

  .form-group {
    width: 100%;
    position: relative;
    overflow: hidden auto;
    input {
      width: 100%;
      padding: calc(var(--paddingBlock) / 2);
      background: var(--login-form-input-bg);
      color: #000;
      font-size: 1em;
      border-radius: 0.25em;
      border: 2px solid var(--login-form-input-accent);
    }
    .hover {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: var(--input-hover-height);
      background: var(--login-form-button-bg);
      transform: translate(-100%);
      transition: all 500ms ease-out;
    }

    //hover
    &:hover,
    &:focus {
      .hover {
        transform: translate(0);
      }
    }
  }

  button {
    width: 100%;
    padding: calc(var(--paddingBlock) / 2);
    border: 3px solid var(--login-form-button-text);
    background: var(--login-form-button-bg);
    color: var(--login-form-button-text);
    font-weight: 500;
    font-size: 1.2em;
    border-radius: 0.25em;
    transition: all 200ms ease-in-out;
    &:hover,
    &:focus {
      border-color: var(--login-form-button-bg);
      background: var(--login-form-button-text);
      color: var(--login-form-button-bg);
    }
  }

  @media only screen and (max-width: 700px) {
    --input-hover-height: 2px;
    width: calc(100% - var(--paddingInline) * 2);
    height: auto;
    aspect-ratio: 1/1.05;
  }
`;

export default LoginForm;
