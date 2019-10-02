import React from 'react';
import { Container, Header, Content, Button , Text} from 'native-base';
export default class SlideBar extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button ref={ (c) => this._button = c }>
           <Text>Click Me</Text> 
          </Button>
        </Content>
      </Container>
    );
  }
}