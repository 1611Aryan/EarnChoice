import styled from '@emotion/styled';
import Select from 'react-select';

const options = [
  { value: 'Admin', label: 'Admin' },
  { value: 'Master', label: 'Master' },
  { value: 'Super', label: 'Super' },
  { value: 'User', label: 'User' },
];

const UsersHeader = () => {
  return (
    <StyledHeader>
      <Select className="select" options={options} />
      <button>Create Master</button>
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
    font-size: 1.15rem;

    &:focus,
    &:hover {
      outline-color: var(--dashboard-accent);
    }
  }
  button {
    padding: calc(var(--paddingBlock) / 2) calc(var(--paddingInline) / 1.5);
    background: var(--users-button-bg);
    color: var(--users-button-text);
    font-size: 1rem;
    border-radius: 3px;
  }
`;

export default UsersHeader;
