import styled from 'styled-components';

const shadow =
  '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  background: var(--success2);
  width: 70vw;
  padding: 40px;
  margin-top: 40px;
  box-shadow: ${shadow};
`;

export const Header = styled.h2`
  box-sizing: border-box;
  color: var(--success1);
  font-size: 24px;
  padding-bottom: 20px;
`;

export const Description = styled.p`
  box-sizing: border-box;
  color: var(--text);
  margin-bottom: 40px;

`;

export const Button = styled.div`
  box-sizing: border-box;
`;
