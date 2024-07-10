import React from 'react';
import { NativeModules,StyleSheet,View,Text,Button, TouchableOpacity } from 'react-native'

const DeviceInfo=NativeModules.DeviceInfoGet;
console.log(DeviceInfo);

const App = () => {
  function handleGetDeviceId(){
    console.log('Getting device id...');
    DeviceInfo.getDeviceID((err, deviceID) => {
                    if (err) {
                        // error
                    } else {
                        console.log(deviceID);
                    }
                })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGetDeviceId} style={styles.button}>
        <Text>Get Device Info</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    // flex:1,
    width:160,
    backgroundColor:'red',
    alignItems:'center',
    padding:8,
    borderRadius:8
  }
})

