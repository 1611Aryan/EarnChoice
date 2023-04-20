import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const TextLogo = () => (
  <Link to="/">
    <StyledTextLogo>
      <span className="upper">EARN CHOICE</span>
      <br />
      <span className="lower">LOTTERY</span>
    </StyledTextLogo>
  </Link>
);

const StyledTextLogo = styled.h1`
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-family: var(--fontSans);
  line-height: 0.9;
  color: inherit;

  .lower {
    font-size: 1.57em;
  }
`;

export default TextLogo;
