import { React } from 'react';
import { string, object } from 'prop-types';
import { StyledInput } from './styles';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

const Input = ({ placeholder, input, meta, type }) => (
  <Tooltip
    title={meta.error}
    position="right"
    trigger="manual"
    open={!!(meta.touched && meta.error)}
    arrow="true"
  >
    <StyledInput
      name={input.name}
      type={type}
      onFocus={input.onFocus}
      onChange={({ target: { value } }) => input.onChange(value)}
      onBlur={input.onBlur}
      error={meta.touched && meta.error}
      placeholder={placeholder}
      value={input.value}
    />
  </Tooltip>
);

Input.propTypes = {
  placeholder: string,
  input: object.isRequired,
  meta: object.isRequired,
  type: string,
};

Input.defaultProps = {
  placeholder: 'Hello World',
  type: 'text',
};

export default Input;
