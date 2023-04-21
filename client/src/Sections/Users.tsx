import styled from '@emotion/styled';
import { useState } from 'react';
import AddUser from '../Components/Users/AddUser';
import Filters from '../Components/Users/Filters';
import HeadRow from '../Components/Users/HeadRow';
import UserRow from '../Components/Users/UserRow';
import UsersHeader from '../Components/Users/UsersHeader';

export type IUser = {
  name: string;
  balance: number[];
  status: boolean;
};

const userTypes = ['Admin', 'Master', 'Super', 'User'];
const Users = () => {
  const [modal, setModal] = useState(false);
  const [userType, setUserType] = useState(0);

  const users = [
    {
      name: 'Aryan',
      balance: [0, 0, 0],
      status: false,
    },
    {
      name: 'Yash',
      balance: [1000, 0, 0],
      status: true,
    },
  ];

  return (
    <StyledUsers>
      <UsersHeader setModal={setModal} setUserType={setUserType} />
      <h3>Users List</h3>
      <Filters />
      {modal && <AddUser setModal={setModal} />}
      <ul>
        <HeadRow />
        {users.map(user => (
          <UserRow user={user} />
        ))}
      </ul>
    </StyledUsers>
  );
};

const StyledUsers = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    padding: calc(var(--paddingBlock) / 2) var(--paddingInline);

    color: #fff;
    font-size: clamp(1rem, 2vw, 1.5rem);
    width: 100%;

    border-bottom: 2px solid #fff2;
  }
  ul {
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .head {
    }
    li {
      width: 100%;
      padding: calc(var(--paddingBlock) / 2) calc(var(--paddingInline) / 2);

      display: flex;
      justify-content: space-between;
      align-items: center;

      font-size: clamp(0.8rem, 2vw, 1rem);
      div {
        flex: 1;
        span {
          display: inline-block;
          width: 100%;
        }
      }

      .name {
        flex: 0.175;
      }
      .balance {
        flex: 0.45;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .status {
        flex: 0.2;
        text-align: center;
      }
      .actions {
        flex: 0.175;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
      }
    }
  }

  @media (max-width: 700px) {
    gap: 0.5rem;
    ul {
      gap: 1rem;
      li {
        width: 150%;
      }
    }
  }
`;

export default Users;
