import styled from '@emotion/styled';

const LoginHeader = () => {
  return (
    <StyledHeader>
      <h1>
        <span className="upper">EARN CHOICE</span>
        <br />
        <span className="lower">LOTTERY</span>
      </h1>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  position: relative;
  z-index: 2;
  font-size: clamp(0.65rem, 2vw, 1rem);
  font-family: var(--fontSans);
  line-height: 0.9;
  color: var(--login-heading);
  padding: var(--padding);
  .lower {
    font-size: 1.57em;
  }
`;

export default LoginHeader;
