import styled from '@emotion/styled';
import { SetStateAction } from 'react';

const AddUser: React.FC<{
  setModal: React.Dispatch<SetStateAction<boolean>>;
}> = ({ setModal }) => {
  const accountType = 'Master';
  const closeModal = () => setModal(false);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    closeModal();
  };
  return (
    <StyledSection onClick={closeModal}>
      <form onClick={e => e.stopPropagation()} onSubmit={submitHandler}>
        <h2>New {accountType}</h2>
        <div className="form-group">
          <label htmlFor="email">User ID</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="User ID"
          />
          <span className="hover"></span>
        </div>
        <div className="form-group">
          <label htmlFor="password">User Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="**********"
          />
          <span className="hover"></span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="**********"
          />
          <span className="hover"></span>
        </div>
        <button type="submit">Add {accountType}</button>
      </form>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: absolute;
  inset: 0;
  background: rgb(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);

  display: grid;
  place-items: center;
  padding: var(--padding);
  form {
    background: #fffa;
    border: 2px solid var(--dashboard-accent);

    width: 35%;

    height: auto;

    padding: var(--padding);

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 0.8rem;
    gap: calc(var(--paddingInline) / 1.25);

    h2 {
      font-size: 2.35em;
      font-weight: 500;
      text-align: center;
    }

    .form-group {
      width: 100%;
      position: relative;
      overflow: hidden auto;
      label {
        display: inline-block;
        font-size: 1.3em;
        margin-bottom: 0.2em;
        font-family: var(--fontSerif);
      }
      input {
        width: 100%;
        padding: calc(var(--paddingBlock) / 2);
        background: var(--login-form-input-bg);
        color: #000;
        font-size: 1em;
        border-radius: 0.25em;
        border: 2px solid var(--login-form-input-accent);
      }
      .hover {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: var(--input-hover-height);
        background: var(--login-form-button-bg);
        transform: translate(-100%);
        transition: all 300ms ease-out;
      }

      //hover
      &:hover,
      &:focus {
        .hover {
          transform: translate(0);
        }
      }
    }

    button {
      width: 100%;
      padding: calc(var(--paddingBlock) / 2);
      border: 2px solid transparent;
      background: var(--login-form-button-bg);
      color: var(--login-form-button-text);
      font-weight: 500;
      font-size: 1.2em;

      transition: all 200ms ease-in-out;
      &:hover,
      &:focus {
        border-color: var(--login-form-button-bg);
        background: var(--login-form-button-text);
        color: var(--login-form-button-bg);
      }
    }
  }

  @media only screen and (max-width: 700px) {
    form {
      width: 100%;
    }
  }
`;

export default AddUser;
