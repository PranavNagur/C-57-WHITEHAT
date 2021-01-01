import * as React from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';


class SoundButton extends React.Component {
   playSound = async () => {
  }

  render() {
    return (
     <TouchableOpacity style = {{
       backgroundColor: 'orange',
       borderWidth: 1, 
       borderColor: 'rgb(127,127,127)',
       alignItems: 'context',
       width: 200,
       height: 30,
      justifyContent: 'left'

     }}>
     <Text style = {{
       fontWeight: 'bold'
       
     }}>Click Me</Text>
     </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
      </View>
    );
  }
}


