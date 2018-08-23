import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  > div {
    display: flex;
  }

  p {
    margin-right: 12px;
  }
`;

export const Item = styled.div`
  box-sizing: border-box;
  display: flex;
  margin-right: 12px;
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  text-indent: 10px;
  padding: 7px 0;
  min-width: 160px;
  border-radius: 2px;
  font-size: 16px;
  margin-right: 12px;
  border: ${props => (props.error ? '1px solid var(--error)' : '1px solid var(--grey1)')};

  @media (max-width: 680px) {
    min-width: unset;
  }
`;
