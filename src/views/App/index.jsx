import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import NewEvent from '../NewEvent';
import { Container, Card, Header, Description } from './styles';
import { Button } from '../NewEvent/styles';

class App extends PureComponent {
  state = {
    submited: false,
  };

  createEvent = () => this.setState({ submited: true });

  createAnotherEvent = () => this.setState({ submited: false });

  render() {
    return this.state.submited ? (
      <Container>
        <Card>
        <Header>Success</Header>
        <Description>Event has been created.</Description>
        <Button onClick={this.createAnotherEvent}>Create another event</Button>
        </Card>
      </Container>
    ) : (
      <NewEvent createEvent={this.createEvent} />

    );
  }
}

App.propTypes = {
  text: string,
};

App.defaultProps = {
  text: 'Hello World',
};

export default App;
