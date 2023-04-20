import styled from '@emotion/styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardNav from '../Components/Dashboard/DashboardNav';
import TextLogo from '../Components/Shared/TextLogo';
import Account from '../Sections/Account';
import Purchased from '../Sections/Purchased';
import Reports from '../Sections/Reports';
import Tickets from '../Sections/Tickets';
import Users from '../Sections/Users';

export type IActive = 'tickets' | 'users' | 'reports' | 'purchased' | 'account';

const Dashboard = () => {
  const [active, setActive] = useState<IActive>('tickets');

  return (
    <StyledDashboard>
      <header>
        <TextLogo />
        <h3>{active.toUpperCase()}</h3>
        <Link to="/">
          <button>Logout</button>
        </Link>
      </header>
      <section className="content">
        <DashboardNav active={active} setActive={setActive} />
        <section>
          {active === 'tickets' && <Tickets />}
          {active === 'users' && <Users />}
          {active === 'reports' && <Reports />}
          {active === 'purchased' && <Purchased />}
          {active === 'account' && <Account />}
        </section>
      </section>
    </StyledDashboard>
  );
};

const StyledDashboard = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    color: var(--dashboard-header);
    padding: var(--padding);
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      flex: 1;
      font-size: 2rem;
      font-weight: 500;
      padding: 0 calc(var(--paddingInline) * 2);
    }

    button {
      background: #345079;
      font-size: 1rem;
      padding: calc(var(--paddingBlock) / 2) calc(var(--paddingInline) / 2);
      border-radius: 5px;
      color: #fff;
      border: 2px solid #fff;
      transition: all 200ms ease;

      &:hover {
        color: #345079;
        background: #fff;
        border-color: #345079;
      }
    }
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;

    width: 100%;

    section {
      width: 100%;
      flex: 1;
      //background: #000;
      padding: var(--padding);
    }
  }
`;

export default Dashboard;
