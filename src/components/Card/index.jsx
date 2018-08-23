import React from 'react';
import { string, node } from 'prop-types';
import { Container, Title, Line } from './styles';

const Card = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Line />
    {children}
  </Container>
);

Card.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
};

export default Card;
