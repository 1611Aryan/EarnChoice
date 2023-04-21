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
            <span>10 SEM</span>
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
            <span>20 SEM</span>
          </div>
        </div>
      </main>
    </StyledTickets>
  );
};

const StyledTickets = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: var(--padding);

  h1 {
    display: inline;
    color: #fffc;
    font-size: clamp(1rem, 2vw, 2rem);
    padding: calc(var(--paddingBlock) / 2) calc(var(--paddingInline) / 2);
  }
  main {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    gap: clamp(1rem, 2vw, 2rem);
    .card {
      width: 28%;
      aspect-ratio: 1/1;
      //width: 90%;
      overflow: visible;
      //  box-shadow: -2px 8px 6px #0003;
      transform-style: preserve-3d;
      transform: scale(0.9) translate3d(0, 0, 0);
      transition: 300ms all ease-in-out;

      --edge: 10px;
      --edge2: 11px;

      &::before {
        content: '';
        position: absolute;
        bottom: calc(-1 * var(--edge));
        left: 0;
        width: 100%;
        height: var(--edge2);
        background: inherit;
        filter: brightness(70%);
        transform-origin: top;
        transform: skew(-41deg, 0) translate3d(0, 0, 0);
      }

      &::after {
        content: '';
        position: absolute;
        left: calc(-1 * var(--edge));
        top: 0;
        height: 100%;
        width: var(--edge2);
        background: inherit;
        filter: brightness(70%);
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
        padding: var(--paddingBlock);

        overflow: hidden;

        display: grid;
        place-items: center;
        position: relative;
        .circle1 {
          position: absolute;
          top: 20%;
          left: 30%;
          transform: translate(-50%, -50%);
          width: 100%;
          aspect-ratio: 1/1;
          background: #000;
          opacity: 0.1;
          border-radius: 50%;
        }
        .circle2 {
          position: absolute;
          top: 10%;
          left: 80%;
          transform: translate(-50%, -50%);
          width: 80%;
          aspect-ratio: 1/1;
          background: #000;
          opacity: 0.1;
          border-radius: 50%;
        }
        span {
          font-size: clamp(1.5rem, 3vw, 3rem);
          font-weight: 700;
          color: #fff;
          z-index: 2;
        }
      }
    }

    .card:nth-of-type(1) {
      background: linear-gradient(to right, #6a3093 0%, #a044ff 100%);
    }
    .card:nth-of-type(2) {
      background: linear-gradient(to right, #fd746c 0%, #ff9068 100%);
    }
    .card:nth-of-type(3) {
      background: linear-gradient(to right, #457fca 0%, #5691c8 100%);
    }
    .card:nth-of-type(4) {
      background: linear-gradient(to right, #b24592 0%, #f15f79 100%);
    }

    .card:nth-of-type(5) {
      background: linear-gradient(to right, #ffb75e 0%, #ed8f03 100%);
    }
  }

  @media only screen and (max-width: 700px) {
    main {
      height: 100%;
      justify-content: space-between;

      .card {
        width: 38%;
        aspect-ratio: 1/1;

        --edge: 5.5px;
        --edge2: 6px;
      }
    }
  }
`;

export default Tickets;
