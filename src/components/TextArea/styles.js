import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
`;

export const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  color: var(--text);
  padding: 7px;
  width: 34vw;
  height: 120px;
  resize: none;
  border: 0;
  border: ${props => (props.error ? '1px solid var(--error)' : '1px solid var(--grey1)')};
  border-radius: 2px;
  font-size: 16px;

  @media (max-width: 680px) {
    width: unset;
    text-indent: unset;
    padding: 0 10px;
  }
`;

export const Footer = styled.div`
  box-sizing: border-box;
  display: flex;
  position: relative;
`;

export const HelperText = styled.p`
  box-sizing: border-box;
  font-size: 14px;
  font-style: italic;
  color: var(--grey2);
  padding-top: 4px;
`;

export const Counter = styled.div`
  box-sizing: border-box;
  position: absolute;
  right: 0;
  color: var(--grey2);
`;
