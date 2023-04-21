import styled from '@emotion/styled';
import { IoDiceOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const TextLogo = () => (
  <Link to="/">
    <StyledTextLogo>
      <IoDiceOutline className="icon" />
      <h1>
        <span className="upper">EARN CHOICE</span>
        <br />
        <span className="lower">LOTTERY</span>
      </h1>
    </StyledTextLogo>
  </Link>
);

const StyledTextLogo = styled.div`
  display: flex;
  align-items: center;
  --font-size: clamp(0.8rem, 2vw, 1.5rem);
  color: inherit;
  gap: calc(var(--paddingInline) / 4);
  .icon {
    font-size: calc(var(--font-size) * 3);
  }
  h1 {
    font-size: var(--font-size);

    line-height: 1;
    color: inherit;
    font-weight: 400;

    .lower {
      font-size: 1.52em;
    }
  }
`;

export default TextLogo;
