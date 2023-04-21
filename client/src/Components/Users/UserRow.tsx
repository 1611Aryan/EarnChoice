import styled from '@emotion/styled';
import { AiTwotoneSetting } from 'react-icons/ai';
import { IUser } from '../../Sections/Users';

const UserRow: React.FC<{ user: IUser }> = ({ user }) => {
  return (
    <StyledRow className="user">
      <div className="name">
        <span>{user.name}</span>
      </div>
      <div className="balance">
        <span>
          <div>{user.balance[0]}</div>
        </span>
        <span>
          <div>{user.balance[1]}</div>
        </span>
        <span>
          <div>{user.balance[2]}</div>
        </span>
      </div>
      <div className="status">
        <span>
          <div className={user.status ? 'enabled' : 'disabled'}>
            {user.status ? 'Enabled' : 'Disabled'}
          </div>
        </span>
      </div>
      <div className="actions">
        <span>
          <div>W</div>
        </span>
        <span>
          <div>D</div>
        </span>
        <span>
          <div>
            <AiTwotoneSetting />
          </div>
        </span>
      </div>
    </StyledRow>
  );
};

const StyledRow = styled.li`
  color: #fff;
  height: 100%;
  .balance {
    span {
      div {
        display: inline;
        background: #e9e9e9;
        color: #000;
        padding: 0 0.4em;
        font-size: clamp(0.8rem, 2vw, 1.2em);
        line-height: 1;
      }
    }
  }

  .status {
    .disabled {
      display: inline;
      color: #000;
      background: #ff5959;
      border-radius: 2px;
      padding: 0.2em 0.5em;
    }
    .enabled {
      display: inline;
      color: #000;

      border-radius: 2px;
      padding: 0.2em 0.5em;
      background: #59ff74;
    }
  }

  .actions {
    div {
      display: inline-block;
      background: #fff4f4;
      color: #000;
      padding: 0.2em 0.4em;
      font-weight: 500;
      font-size: clamp(0.8rem, 2vw, 1.2em);
      line-height: 1;
      cursor: pointer;
    }
  }
`;

export default UserRow;
