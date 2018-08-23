import React, { PureComponent } from 'react';
import { string, object, func } from 'prop-types';
import axios from 'axios';
import { StyledSelect } from './styles';
import { Container, HelperText } from '../TextArea/styles';

const getValue = (value, options) => {
  if (value || value === 0) {
    const toParse = options[0]?.options
      ? options.reduce((acc, group) => [...acc, ...group.options], [])
      : options;
    return toParse.filter(item => item.value === value)[0];
  }
  return null;
};

const getPrefix = (optionsArr = [], currValue) =>
  optionsArr.reduce((acc, curr) => {
    curr.options.map(option => {
      if (option.value === currValue) {
        acc = curr.label;
      }
    });
    return acc;
  }, '');

class AsyncSelect extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      prefix: '',
    };
    this.getOptions();
  }

  getOptions = () => {
    axios.get(this.props.optionsUrl).then(({ data }) => {
      const options = this.props.optionsParser(data);
      this.setState({ options }, () => {
        this.checkPrefix(this.props.input.value);
        this.props.onChange(getValue(this.props.input.value, options));
      });
    });
  };

  checkPrefix = value => {
    if (value && this.state.options[0]?.options) {
      const prefix = getPrefix(this.state.options, value);

      if (prefix !== this.state.prefix) {
        this.setState({ prefix });
      }
    }
  };

  onChange = data => {
    this.checkPrefix(data.value);
    this.props.onChange(data);
    this.props.input.onChange(data.value);
  };

  onBlur = e => {
    e.preventDefault();
    this.props.input.onBlur();
  };

  render() {
    const { placeholder, input, meta, helperText } = this.props;
    const { options, prefix } = this.state;
    let value = getValue(input.value, options);

    if (prefix) {
      value = { ...value, label: `${prefix} - ${value.label}` };
    }

    return (
      <Container>
        <StyledSelect
          name={input.name}
          onChange={this.onChange}
          onFocus={input.onFocus}
          onBlur={this.onBlur}
          error={meta.touched && meta.error}
          placeholder={placeholder}
          value={value}
          options={options}
          isLoading={options.length === 0}
          isSearchable={false}

        />
        {helperText && <HelperText>{helperText}</HelperText>}
      </Container>
    );
  }
}

AsyncSelect.propTypes = {
  placeholder: string,
  input: object.isRequired,
  meta: object.isRequired,
  optionsUrl: string.isRequired,
  optionsParser: func.isRequired,
  helperText: string,
  onChange: func,
};

AsyncSelect.defaultProps = {
  placeholder: '',
  type: 'text',
  helperText: '',
  onChange: () => {},
};

export default AsyncSelect;
