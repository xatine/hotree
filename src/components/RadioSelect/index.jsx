import { React, PureComponent } from 'react';
import { object, array } from 'prop-types';
import { RadioGroup, Radio } from 'react-radio-group';
import { Container, Item } from './styles';

class RadioSelect extends PureComponent {
  render() {
    const { input, options } = this.props;

    return (
      <Container className="radio-container">
      <RadioGroup name={input.name} selectedValue={input.value} onChange={input.onChange}>
        {options.map(({ value, label }) => (
          <Item key={value}>
            <Radio value={value} />
            {label}
          </Item>
        ))}
      </RadioGroup>
    </Container>
    );
  }
}

RadioSelect.propTypes = {
  input: object.isRequired,
  meta: object.isRequired,
  options: array,
};

RadioSelect.defaultProps = {
  options: [],
};

export default RadioSelect;
