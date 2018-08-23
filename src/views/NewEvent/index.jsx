import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { func, bool } from 'prop-types';
import Card from 'components/Card';
import FieldBase from 'components/FieldBase';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import AsyncSelect from 'components/AsyncSelect';
import NumInput from 'components/NumInput';
import RadioSelect from 'components/RadioSelect';
import DateInput from 'components/DateInput';
import { omit } from 'utils';
import validate from './validate';
import { Container, RadioContainer, Button } from './styles';

const selector = formValueSelector('newEventForm');

const paymentOptions = [
  { label: 'Free event', value: false },
  { label: 'Paid event', value: true },
];

const parseCategories = items => items.map(({ id, name }) => ({ label: name, value: id }));

const parseEmployees = items =>
  items.reduce(
    (acc, { id, name, lastname, email }) => {
      acc[id === 3 ? 0 : 1].options.push({ label: `${name} ${lastname}`, value: id, email });
      return acc;
    },
    [{ label: 'Me', options: [] }, { label: 'Others', options: [] }],
  );

@connect(state => ({ isPaidEvent: selector(state, 'paid_event') }))
@reduxForm({ form: 'newEventForm', validate, initialValues: { id: 3, paid_event: false } })
class NewEvent extends PureComponent {
  changeEmail = ({ email }) => {
    this.props.change('email', email);
  };

  onSubmit = values => {
    const parsedValue = {
      ...omit(values, ['id', 'email']),
      coordinator: { id: values.id, email: values.email },
      date: values.date.format('YYYY-MM-DDTHH:mm'),
      duration: values.duration * 3600,
      event_fee: values.paid_event ? values.event_fee : 0,
    };
    console.log(parsedValue);
    this.props.createEvent();
  };

  render() {
    return (
      <Container onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Card title="About">
          <FieldBase
            component={Input}
            label="Title"
            isRequired
            name="title"
            placeholder="Make it short and clear"
          />
          <FieldBase
            component={TextArea}
            label="Description"
            isRequired
            name="description"
            placeholder="Write about your event, be creative"
            helperText="Max length 140 characters"
            maxLength={140}
          />
          <FieldBase
            component={AsyncSelect}
            label="Category"
            name="category_id"
            placeholder="Select category (skills, interests, locations)"
            helperText="Describes topic and people who should be interested in this event"
            optionsUrl="https://demo6386028.mockable.io/categories"
            optionsParser={parseCategories}
          />
          <RadioContainer>
            <FieldBase
              component={RadioSelect}
              label="Payment"
              name="paid_event"
              options={paymentOptions}
            />
            {this.props.isPaidEvent && (
              <FieldBase
                component={NumInput}
                isRequired
                name="event_fee"
                placeholder="Fee"
                helperText="$"
              />
            )}
          </RadioContainer>
          <FieldBase
            component={NumInput}
            label="Reward"
            name="reward"
            placeholder="Number"
            helperText="reward points for attendance"
          />
        </Card>

        <Card title="Coordinator">
          <FieldBase
            component={AsyncSelect}
            label="Responsible"
            name="id"
            isRequired
            optionsUrl="https://demo6386028.mockable.io/employes"
            optionsParser={parseEmployees}
            onChange={this.changeEmail}
          />
          <FieldBase component={Input} label="Email" name="email" placeholder="Email" />
        </Card>

        <Card title="When">
          <FieldBase component={DateInput} label="Starts on" name="date" isRequired />
          <FieldBase
            component={NumInput}
            label="Duration"
            name="duration"
            placeholder="Number"
            helperText="hour"
          />
        </Card>
        <Button type="submit">Publish event</Button>
      </Container>
    );
  }
}

NewEvent.propTypes = {
  change: func.isRequired,
  isPaidEvent: bool.isRequired,
  handleSubmit: func.isRequired,
  createEvent: func.isRequired,
};

export default NewEvent;
