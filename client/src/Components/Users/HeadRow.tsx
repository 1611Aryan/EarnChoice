import styled from '@emotion/styled';

const HeadRow = () => {
  return (
    <StyledHeadRow className="head">
      <div className="name">
        <span>Name</span>
      </div>
      <div className="balance">
        <span>Balance</span>
        <span>Exposure</span>
        <span>Tickets</span>
      </div>
      <div className="status">
        <span>Status</span>
      </div>
      <div className="actions">
        <span>Actions</span>
      </div>
    </StyledHeadRow>
  );
};

const StyledHeadRow = styled.li`
  background: rgb(255, 255, 255, 0.1);
  color: #aeaeae;
`;

export default HeadRow;
