import styled from '@emotion/styled';
import LoginForm from '../Components/Login/LoginForm';
import LoginHeader from '../Components/Login/LoginHeader';
import loginBg from '/loginBg.jpg';

const Login = () => {
  return (
    <StyledLogin>
      <section className="main">
        <LoginHeader />
        <LoginForm />
      </section>
      <div className="bg">
        <img src={loginBg} className="loginBg" />
        <div className="overlay"></div>
      </div>
    </StyledLogin>
  );
};

const StyledLogin = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: space-between;

  .main {
    flex: 1;
    height: 100%;
    position: relative;
  }

  .bg {
    flex: 1;
    height: 100%;
    position: relative;
    .loginBg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .overlay {
      position: absolute;
      inset: 0;
      background: var(--login-background);
      backdrop-filter: blur(2px);
    }
  }

  @media only screen and (max-width: 700px) {
    display: block;
    position: relative;
    .main {
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }

    .bg {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }
  }
`;

export default Login;
