import styled from '@emotion/styled';
import { useState } from 'react';

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

        <button>
          <span className="profile">A</span>
          <span>Aryan</span>
        </button>
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
      <div className="noise1"></div>
      <div className="noise2"></div>
    </StyledDashboard>
  );
};

const StyledDashboard = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: var(--dashboard-background);

  position: relative;
  header {
    z-index: 2;
    width: 100%;
    color: var(--dashboard-white);
    padding: var(--padding);
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 11%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 1rem;
      gap: calc(var(--paddingInline) / 2);
      border-radius: 15px;
      overflow: hidden;
      color: var(--dashboard-white);
      background: #fff1;
      outline: 3px solid var(--dashboard-accent);
      transition: all 200ms ease;

      .profile {
        width: 2.3em;
        aspect-ratio: 1/1;
        border-radius: 15px;

        display: grid;
        place-items: center;
        background: var(--dashboard-accent);
        color: #000;
        font-size: 1.2em;
        font-weight: 700;
      }
    }
  }
  .content {
    z-index: 2;
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

  .noise1 {
    position: absolute;
    width: 40%;
    aspect-ratio: 1/1;
    left: -10%;
    top: 40%;

    background: linear-gradient(
      90deg,
      rgba(114, 99, 252, 1) 0%,
      rgba(217, 217, 217, 0) 100%
    );
    filter: blur(200px);
    border-radius: 399.5px;
  }

  .noise2 {
    position: absolute;
    width: 60%;
    aspect-ratio: 1/1;
    right: -10%;
    bottom: 40%;

    filter: blur(200px);
    border-radius: 399.5px;

    /* Rectangle 16 */

    background: linear-gradient(
      90deg,
      rgba(2, 195, 154, 0.5) 0%,
      rgba(217, 217, 217, 0) 100%
    );
  }
`;

export default Dashboard;
