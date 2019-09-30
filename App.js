import React from 'react';
import {  View, Text } from 'react-native';
import CreateAppContainer from './src/Config/navigation'

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <CreateAppContainer />
        <Text>Dileep</Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


export default App