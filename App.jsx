// import { Button, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// import { NativeModules } from 'react-native'
// const {CalendarModule}=NativeModules;
// console.log(CalendarModule);

// CalendarModule.createCalendarEvent(res=>console.log(res));

// const App = () => {
//   const createCalendarEventPromise=async ()=>{
//     try {
//       var result =await CalendarModule.createCalendarPromise()
//       console.log(result)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <View>
//       <Text>Hello World</Text>
//       <Button title='Calendar Event Promise' onPress={createCalendarEventPromise}>

//       </Button>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})


//from docs
// import React from 'react';
// import {NativeModules, Button} from 'react-native';
// const {CalendarModule} = NativeModules;

// const NewModuleButton = () => {
//   const onPress = () => {
//     CalendarModule.createCalendarEvent('testName', 'testLocation');
//   };

//   return (
//     <Button
//       title="Click to invoke your native module!"
//       color="#841584"
//       onPress={onPress}
//     />
//   );
// };

// export default NewModuleButton;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})