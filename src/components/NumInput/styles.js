import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledNumInput = styled.input`
  box-sizing: border-box;
  text-indent: 10px;
  padding: 7px 0;
  max-width: 90px;
  border-radius: 2px;
  font-size: 16px;
  border: 1px solid var(--grey1);
`;

export const HelperText = styled.p`
  box-sizing: border-box;
  padding-left: 10px;
  color: var(--text);
`;
