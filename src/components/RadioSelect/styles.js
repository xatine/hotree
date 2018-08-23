import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  > div {
    display: flex;
  }
`;

export const Item = styled.div`
  box-sizing: border-box;
  display: flex;
  color: var(--text);
  padding-right: 12px;
`;
