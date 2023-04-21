import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('dashboard');
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <header>
        <h2>Login Now</h2>
        <span className="tagLine">Every ticket is a chance to win big</span>
      </header>
      <div className="form-group">
        <label htmlFor="email">User ID</label>
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="Enter your User ID"
        />
        <span className="hover"></span>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="**********"
        />
        <span className="hover"></span>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  --input-hover-height: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 85%;

  height: auto;

  background: var(--login-form-bg);

  padding: var(--padding);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: clamp(0.8rem, 2vw, 1rem);
  gap: calc(var(--paddingInline) / 1.25);

  header {
    h2 {
      font-size: 2.35em;
      font-weight: 500;
      text-align: center;
    }

    .tagLine {
      display: inline-block;
      font-size: 1.5em;
      text-align: center;
      color: #888;
      margin-top: 0.4em;
    }
  }

  .form-group {
    width: 100%;
    position: relative;
    overflow: hidden auto;
    label {
      display: inline-block;
      font-size: 1.3em;
      margin-bottom: 0.2em;
      font-family: var(--fontSerif);
    }
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
      transition: all 300ms ease-out;
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
    border: 2px solid var(--login-form-button-text);
    background: var(--login-form-button-bg);
    color: var(--login-form-button-text);
    font-weight: 500;
    font-size: 1.2em;

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
    width: 100%;
    height: auto;
    aspect-ratio: 1/1.05;
    header {
      .tagLine {
        color: #222;
      }
    }
    button {
      border: 0;
    }
  }
`;

export default LoginForm;
