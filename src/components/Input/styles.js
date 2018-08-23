import styled from 'styled-components';

export const StyledInput = styled.input`
  box-sizing: border-box;
  text-indent: 10px;
  padding: 7px 0;
  min-width: 34vw;
  border-radius: 2px;
  font-size: 16px;
  border: ${props => (props.error ? '1px solid var(--error)' : '1px solid var(--grey1)')};

  @media (max-width: 680px) {
    min-width: unset;
  }
`;
