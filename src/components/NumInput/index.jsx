import { React } from 'react';
import { string, object } from 'prop-types';
import { Container, StyledNumInput, HelperText } from './styles';

const NumInput = ({ placeholder, input, meta, helperText }) => (
  <Container>
    <StyledNumInput
      name={input.name}
      type="number"
      onFocus={input.onFocus}
      onChange={({ target: { value } }) => input.onChange(Number(value))}
      onBlur={({ target: { value } }) => input.onChange(Number(value))}
      error={meta.touched && meta.error}
      placeholder={placeholder}
      value={input.value}
    />
    {helperText && <HelperText>{helperText}</HelperText>}
  </Container>
);

NumInput.propTypes = {
  placeholder: string,
  input: object.isRequired,
  meta: object.isRequired,
  helperText: string,
};

NumInput.defaultProps = {
  placeholder: '',
  helperText: '',
};

export default NumInput;
