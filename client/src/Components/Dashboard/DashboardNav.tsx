import styled from '@emotion/styled';
import React, { SetStateAction } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import type { IActive } from '../../Pages/Dashboard';

const DashboardNav: React.FC<{
  active: IActive;
  setActive: React.Dispatch<SetStateAction<IActive>>;
  menu: boolean;
  setMenu: React.Dispatch<SetStateAction<boolean>>;
}> = ({ active, setActive, menu, setMenu }) => {
  const closeMenu = () => setMenu(false);

  return (
    <StyledNav>
      <div className="back">
        <IoArrowBackOutline onClick={closeMenu} />
      </div>
      <ul>
        <li
          className={active === 'tickets' ? 'active' : ''}
          onClick={() => setActive('tickets')}
        >
          Tickets
        </li>
        <li
          className={active === 'users' ? 'active' : ''}
          onClick={() => setActive('users')}
        >
          Users
        </li>
        <li
          className={active === 'reports' ? 'active' : ''}
          onClick={() => setActive('reports')}
        >
          My Reports
        </li>
        <li
          className={active === 'purchased' ? 'active' : ''}
          onClick={() => setActive('purchased')}
        >
          Purchased
        </li>
        <li
          className={active === 'account' ? 'active' : ''}
          onClick={() => setActive('account')}
        >
          Account
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  //padding: 0 var(--paddingInline);
  .back {
    display: none;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 2px solid var(--dashboard-accent);
  }
  li {
    flex: 1;
    color: var(--dashboard-white);
    cursor: pointer;
    padding: calc(var(--paddingBlock) / 2) calc(var(--paddingInline) / 2);
    transition: all 200ms ease-in-out;
  }

  li:not(.active):hover {
    background: var(--dashboard-accent);
    opacity: 0.8;
    color: #222;
  }

  .active {
    background: var(--dashboard-accent);
    color: #000;
  }

  @media only screen and (max-width: 700px) {
    position: fixed;
    width: 100%;
    inset: 0;
    background: #fff;
    z-index: 2;
    display: flex;
    flex-direction: column;
    .back {
      display: block;
      padding: var(--padding);
      font-size: 1.5rem;
      color: #000;
    }
    ul {
      flex: 1;
      width: 100%;

      flex-direction: column;
      justify-content: space-evenly;
      padding: 0 calc(var(--paddingInline) / 2);
      border: 0;

      li {
        flex: 0;
        width: 100%;
        display: grid;
        place-items: center;
        //padding: 0;
        border-bottom: 2px solid var(--dashboard-accent);
      }
    }
  }
`;

export default DashboardNav;
