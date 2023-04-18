import styled from '@emotion/styled';
import LoginForm from '../Components/Login/LoginForm';
import LoginHeader from '../Components/Login/LoginHeader';
import loginBg from '/loginBG.png';

const Login = () => {
  return (
    <StyledLogin>
      <img src={loginBg} className="loginBg" />
      <div className="overlay"></div>
      <LoginHeader />
      <LoginForm />
    </StyledLogin>
  );
};

const StyledLogin = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  .loginBg {
    position: absolute;
    inset: 0;
    transform: scale(1.5);
  }
  .overlay {
    position: absolute;
    inset: 0;
    background: var(--login-background);
    backdrop-filter: blur(10px);
  }

  @media only screen and (max-width: 700px) {
    .loginBg {
      transform: scale(1);
      transform: translate(-50%, -30%);
    }
    .overlay {
      backdrop-filter: blur(4px);
    }
  }
`;

export default Login;
