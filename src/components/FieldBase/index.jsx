import React from 'react';
import { string, node, bool } from 'prop-types';
import { Field } from 'redux-form';
import { omit } from 'utils';
import { Container, Label } from './styles';

const FieldBase = props => (
  <Container>
    {props.label && <Label isRequired={props.isRequired}>{props.label}</Label>}
    <Field
      name={props.name}
      component={props.component}
      props={omit(props, ['component', 'name'])}
    />
  </Container>
);

FieldBase.propTypes = {
  label: string.isRequired,
  isRequired: bool,
  name: string.isRequired,
  component: node.isRequired,
};

FieldBase.defaultProps = {
  isRequired: false,
};

export default FieldBase;
