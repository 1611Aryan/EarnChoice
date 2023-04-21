import styled from '@emotion/styled';
import Filters from '../Components/Users/Filters';
import HeadRow from '../Components/Users/HeadRow';
import UserRow from '../Components/Users/UserRow';
import UsersHeader from '../Components/Users/UsersHeader';

export type IUser = {
  name: string;
  balance: number[];
  status: boolean;
};

const Users = () => {
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
      <UsersHeader />
      <h3>Users List</h3>
      <Filters />
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

  h3 {
    padding: calc(var(--paddingBlock) / 2) var(--paddingInline);

    color: #fff;
    font-size: 1.5rem;
    width: 100%;

    border-bottom: 2px solid #fff2;
  }
  ul {
    width: 100%;
    height: 100%;

    .head {
    }
    li {
      width: 100%;
      padding: calc(var(--paddingBlock) / 2) var(--paddingInline);

      display: flex;
      justify-content: space-between;
      align-items: center;

      font-size: 1rem;
      div {
        flex: 1;
        span {
          display: inline-block;
          width: 100%;
        }
      }

      .name {
        flex: 0.2;
      }
      .balance {
        flex: 0.4;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .status {
        flex: 0.2;
        text-align: center;
      }
      .actions {
        flex: 0.2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
      }
    }
  }
`;

export default Users;
