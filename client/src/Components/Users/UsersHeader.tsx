import styled from '@emotion/styled';
import { SetStateAction } from 'react';
import Select from 'react-select';

const options = [
  { value: 0, label: 'Admin' },
  { value: 1, label: 'Master' },
  { value: 2, label: 'Super' },
  { value: 3, label: 'User' },
];

const UsersHeader: React.FC<{
  setModal: React.Dispatch<SetStateAction<boolean>>;
  setUserType: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setModal, setUserType }) => {
  const openModal = () => setModal(true);
  return (
    <StyledHeader>
      <Select
        className="select"
        options={options}
        onChange={e => setUserType(prev => (e ? e.value : prev))}
      />
      <button onClick={openModal}>Create Master</button>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--padding);

  .select {
    width: 20%;
    font-size: clamp(0.75rem, 2vw, 1.15rem);

    &:focus,
    &:hover {
      outline-color: var(--dashboard-accent);
    }
  }
  button {
    padding: calc(var(--paddingBlock) / 2) calc(var(--paddingInline) / 1.5);
    background: var(--users-button-bg);
    color: var(--users-button-text);
    font-size: calc(0.8rem, 2vw, 1rem);
    border-radius: 3px;
  }

  @media only screen and (max-width: 700px) {
    .select {
      width: 50%;
    }
  }
`;

export default UsersHeader;
