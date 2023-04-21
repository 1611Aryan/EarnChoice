import styled from '@emotion/styled';
import TextLogo from '../Shared/TextLogo';

const LoginHeader = () => {
  return (
    <StyledHeader>
      <TextLogo />
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  position: relative;
  z-index: 2;
  width: 100%;
  padding: var(--padding);
  color: var(--login-heading);
`;

export default LoginHeader;
