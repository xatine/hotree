import { React, PureComponent } from 'react';
import { string, object } from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { RadioGroup, Radio } from 'react-radio-group';
import 'react-datepicker/dist/react-datepicker.css';

import { Container, StyledInput, Item } from './styles';

class DateInput extends PureComponent {
  state = {
    value: this.props.input.value || null,
  };

  change = value => {
    let v = value;
    while (!moment(value).isAfter(moment())) {
      v = v.add(15, 'minutes');
    }
    this.setState({ value: v });
    this.props.input.onChange(v);
    this.forceUpdate();
  };

  onRadioChange = value => {
    if (this.state.value) {
      const changeType = value === 'PM' ? 'add' : 'subtract';
      this.change(this.state.value[changeType](12, 'hours'));
    }
  };

  isAfterNoon = value =>
    moment(value).isAfter(
      moment(value)
        .hours(11)
        .minutes(59)
        .seconds(59),
    );

  render() {
    const { value } = this.state;
    const { input, meta } = this.props;
    const time = this.isAfterNoon(value) ? 'PM' : 'AM';

    return (
      <Container>
        <DatePicker
          placeholderText="dd/mm/yyyy"
          selected={value}
          onChange={this.change}
          onSelect={input.onBlur}
          onClickOutside={input.onBlur}
          onFocus={input.onFocus}
          minDate={moment()}
          dateFormat="DD/MM/YYYY"
          customInput={<StyledInput name={input.name} error={meta.touched && meta.error} />}
        />
        <p>at</p>
        <DatePicker
          placeholderText="--/--"
          selected={value}
          onChange={this.change}
          onSelect={input.onBlur}
          onClickOutside={input.onBlur}
          onFocus={input.onFocus}
          minDate={moment()}
          dateFormat="h:mm"
          customInput={<StyledInput name={input.name} error={meta.touched && meta.error} />}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
        />
        <RadioGroup selectedValue={time} onChange={this.onRadioChange}>
          <Item>
            <Radio value="AM" /> AM
          </Item>
          <Item>
            <Radio value="PM" /> PM
          </Item>
        </RadioGroup>
      </Container>
    );
  }
}

DateInput.propTypes = {
  placeholder: string,
  input: object.isRequired,
  meta: object.isRequired,
};

DateInput.defaultProps = {
  placeholder: '',
};

export default DateInput;
