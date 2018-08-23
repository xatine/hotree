import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  padding-top: 20px;
`;

export const Label = styled.div`
  box-sizing: border-box;
  color: var(--primary2);
  font-size: 16px;
  min-width: 150px;
  text-transform: uppercase;
  position: relative;
  padding-top: 7px;
  padding-right: 2px;

  ::after {
    position: absolute;
    content: '*';
    display: ${props => (props.isRequired ? 'inline' : 'none')};
    color: var(--error);
    padding-left: 5px;
  }
`;
