import styled from '@emotion/styled';
import { SetStateAction } from 'react';
import type { IActive } from '../../Pages/Dashboard';

const DashboardNav: React.FC<{
  active: IActive;
  setActive: React.Dispatch<SetStateAction<IActive>>;
}> = ({ active, setActive }) => (
  <StyledNav>
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

const StyledNav = styled.nav`
  width: 100%;
  padding: 0 var(--paddingInline);
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid #ddd;
    border-bottom: 2px solid #489354;
  }
  li {
    flex: 1;
    cursor: pointer;
    padding: calc(var(--paddingBlock) / 2) calc(var(--paddingInline) / 2);
    transition: all 200ms ease-in-out;
  }

  li:not(.active):hover {
    background: #489354cc;
    color: #fff;
  }

  .active {
    background: #489354;
    color: #fff;
  }
`;

export default DashboardNav;
