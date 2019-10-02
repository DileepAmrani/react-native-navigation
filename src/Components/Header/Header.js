import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderIconExample extends Component {
  render() {
    return (
      <Container>
        <Header>
  
          <Button transparent onPress={()=>alert('dd')}>
              <Icon name='menu' onPress={() => alert('d')}/>
          </Button>
        
          <Body>
            <Title>Hats Villa</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}

