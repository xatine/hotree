import React, { PureComponent } from 'react';
import { string, object, number } from 'prop-types';
import { Container, StyledTextArea, Footer, HelperText, Counter } from './styles';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

class TextArea extends PureComponent {
  constructor(props) {
    super(props);
    this.charactersCount = 0;
  }

  onChange = ({ target: { value } }) => {
    this.charactersCount = value.length;
    this.props.input.onChange(value);
  };

  render() {
    const { placeholder, input, meta, helperText, maxLength } = this.props;

    return (
      <Tooltip
        title={meta.error}
        position="right"
        trigger="manual"
        open={!!(meta.touched && meta.error)}
        arrow="true"
      >
        <Container>
          <StyledTextArea
            name={input.name}
            onFocus={input.onFocus}
            onChange={this.onChange}
            onBlur={input.onBlur}
            error={meta.touched && meta.error}
            placeholder={placeholder}
            value={input.value}
            maxLength={maxLength}
          />
          {(helperText || maxLength) && (
            <Footer>
              <HelperText>{helperText}</HelperText>
              {maxLength && <Counter>{`${this.charactersCount}/${maxLength}`}</Counter>}
            </Footer>
          )}
        </Container>
      </Tooltip>
    );
  }
}

TextArea.propTypes = {
  placeholder: string,
  input: object.isRequired,
  meta: object.isRequired,
  helperText: string,
  maxLength: number,
};

TextArea.defaultProps = {
  placeholder: '',
  helperText: '',
  maxLength: null,
};

export default TextArea;
