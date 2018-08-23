import styled from 'styled-components';

const shadow =
  '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)';

export const Container = styled.div`
  box-sizing: border-box;
  background-color: var(--white);
  box-shadow: ${shadow};
  padding: 40px;
  width: 70vw;
  margin-bottom: 40px;

  @media (max-width: 1021px) {
    width: 90vw;
  }
`;

export const Title = styled.h1`
  color: var(--primary2);
  font-size: 30px;
`;

export const Line = styled.hr`
  border: 1px solid var(--grey1);
  background-color: var(--grey1);
  margin: 10px 0 20px;
`;
