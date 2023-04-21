import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';

const Filters = () => {
  return (
    <StyledDiv>
      <div className="searchBar">
        <span className="searchIcon">
          <FaSearch className="icon" />
        </span>
        <input type="text" name="searchText" placeholder="Search Users" />
      </div>
      <div className="resultCount">
        Showing &nbsp;&nbsp;<span>10</span> &nbsp;&nbsp;Results
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: calc(var(--paddingBlock) / 2) var(--paddingInline);

  .searchBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #222222;
    color: #787878;

    border-radius: 2px;
    overflow: hidden;

    .searchIcon {
      font-size: clamp(0.8rem, 2vw, 1.25rem);
      padding: 0 calc(var(--paddingInline) / 4);
    }
    input {
      padding: calc(var(--paddingBlock) / 3) calc(var(--paddingInline) / 8);
      background: transparent;
      font-size: clamp(0.7rem, 2vw, 1.1rem);

      font-weight: 300;
    }
  }

  .resultCount {
    color: #fff;
    font-size: clamp(0.7rem, 2vw, 1.1rem);
    span {
      background: #ffb75e;
      padding: 4px 6px;
    }
  }
`;

export default Filters;
