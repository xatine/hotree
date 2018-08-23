import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Button = styled.button`
  display: flex;
  align-items: flex-end;
  background: var(--accent);
  border: 0;
  border-radius: 2px;
  color: var(--white);
  text-transform: uppercase;
  font-size: 16px;
  padding: 20px 30px;
  cursor: pointer;
`;

