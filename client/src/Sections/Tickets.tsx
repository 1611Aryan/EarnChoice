import styled from '@emotion/styled';

const Tickets = () => {
  return (
    <StyledTickets>
      <h1>Buy Tickets</h1>
      <main>
        <div className="card">
          <div className="content">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <span>3 SEM</span>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <span>5 SEM</span>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <span>7 SEM</span>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <span>15 SEM</span>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <span>21 SEM</span>
          </div>
        </div>
      </main>
    </StyledTickets>
  );
};

const StyledTickets = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    display: inline;
    padding: calc(var(--paddingBlock) / 2) calc(var(--paddingInline) / 2);
  }
  main {
    width: 100%;
    flex: 1;
    display: flex;

    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    gap: 2rem;
    .card {
      width: 23%;
      aspect-ratio: 1/1;
      overflow: visible;
      box-shadow: -2px 8px 6px #0003;
      transform-style: preserve-3d;
      transform: scale(0.9) translate3d(0, 0, 0);
      transition: 300ms all ease-in-out;

      cursor: pointer;

      &::before {
        content: '';
        position: absolute;
        bottom: -5.5px;
        left: 0;
        width: 100%;
        height: 6px;
        background-color: inherit;
        filter: brightness(80%);
        transform-origin: top;
        transform: skew(-41deg, 0) translate3d(0, 0, 0);
      }

      &::after {
        content: '';
        position: absolute;
        left: -4.5px;
        top: 0;
        height: 100%;
        width: 5px;
        background-color: inherit;
        filter: brightness(80%);
        -webkit-transform-origin: right;
        transform-origin: right;
        transform: skew(0, -49deg);
        z-index: 2;
      }

      &:hover {
        transform: scale(0.8) translate3d(0, 0, 0);
      }

      .content {
        width: 100%;
        height: 100%;
        overflow: hidden;

        display: grid;
        place-items: center;
        position: relative;
        .circle1 {
          position: absolute;
          top: 20%;
          left: 80%;
          transform: translate(-50%, -50%);
          width: 80%;
          aspect-ratio: 1/1;
          background: #000;
          opacity: 0.1;
          border-radius: 50%;
        }
        .circle2 {
          position: absolute;
          top: 10%;
          left: 57%;
          transform: translate(-50%, -50%);
          width: 120%;
          aspect-ratio: 1/1;
          background: #000;
          opacity: 0.1;
          border-radius: 50%;
        }
        span {
          font-size: 2rem;
          font-weight: 600;
          color: #fff;
          z-index: 2;
        }
      }
    }

    .card:nth-of-type(1) {
      background: lightsalmon;
    }
    .card:nth-of-type(2) {
      background: lightcoral;
    }
    .card:nth-of-type(3) {
      background: lightblue;
    }
    .card:nth-of-type(4) {
      background: lightsteelblue;
    }

    .card:nth-of-type(5) {
      background: lightseagreen;
    }
  }
`;

export default Tickets;
