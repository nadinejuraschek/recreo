import styled from 'styled-components';

export const Wrapper = styled.div.attrs(() => ({
  className: 'address-input-wrapper',
}))`
  .geoapify-autocomplete-input {
    background-color: #f8f8f880;
    border: none;
    border-radius: 8px 8px 0 0;
    box-shadow: 0 0.0625rem 0.125rem #00000015;
    font-size: 1.6rem;
    font-weight: normal;
    margin-bottom: 0.75rem;

    height: 40px;
    width: 100%;

    @media only screen and (min-width: 900px) {
      height: 50px;
    }

    &::placeholder {
      color: var(--blue__medium);
    }

    &:focus {
      border-bottom: 3px solid var(--yellow);
      outline: none;
    }
  }

  .geoapify-autocomplete-items {
    background-color: var(--white__off);
    border: none;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 0.0625rem 0.125rem #00000015;

    top: 90%;

    div:hover {
      background-color: var(--yellow__light);
    }
  }
`;
