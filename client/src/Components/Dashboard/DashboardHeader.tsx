import styled from '@emotion/styled';
import { SetStateAction, useState } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import TextLogo from '../Shared/TextLogo';

const DashboardHeader: React.FC<{
  setMenu: React.Dispatch<SetStateAction<boolean>>;
}> = ({ setMenu }) => {
  const openMenu = () => setMenu(true);
  const [submenu, setSubmenu] = useState(false);

  return (
    <StyledHeader>
      <TextLogo />
      <div>
        <button onClick={() => setSubmenu(true)}>
          <span className="profile">A</span>
          <span>Aryan</span>
          {submenu && (
            <div className="subMenu">
              <Link to="/">
                <span>Logout</span>
              </Link>
            </div>
          )}
        </button>
        <RiMenu3Line onClick={openMenu} className="menu" />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  z-index: 2;
  width: 100%;
  color: var(--dashboard-white);
  padding: var(--padding);
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 11%;
    display: flex;
    align-items: center;
    gap: var(--paddingBlock);
  }
  button {
    --radius: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: clamp(0.6rem, 2vw, 1rem);
    gap: calc(var(--paddingInline) / 2);
    border-radius: var(--radius);

    color: var(--dashboard-white);
    background: #fff1;
    outline: 3px solid var(--dashboard-accent);
    outline-offset: -3px;
    transition: all 200ms ease;
    position: relative;
    .profile {
      width: 2.3em;
      aspect-ratio: 1/1;
      border-radius: var(--radius);
      display: grid;
      place-items: center;
      background: var(--dashboard-accent);
      color: #000;
      font-size: 1.2em;
      font-weight: 700;
    }

    .subMenu {
      position: absolute;
      top: 90%;
      left: 0;
      width: 100%;
      background: var(--dashboard-accent);

      color: #fff;
      border-radius: 0 0 var(--radius) var(--radius);
      span {
        display: inline-block;
        padding: calc(var(--paddingBlock) / 2) var(--paddingInline);
      }
    }
  }

  .menu {
    display: none;
    color: var(--dashboard-white);
    font-size: clamp(1.5rem, 2vw, 2.5rem);
  }

  @media only screen and (max-width: 700px) {
    div {
      width: 35%;
      button {
        outline: 1px solid var(--dashboard-accent);
        outline-offset: -1px;
        --radius: 5px;
      }
    }
    .menu {
      display: block;
    }
  }
`;

export default DashboardHeader;
