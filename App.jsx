import React from 'react';
import { NativeModules,StyleSheet,View,Text,Button, TouchableOpacity } from 'react-native'

const {DeviceInfoGet}=NativeModules

console.log(NativeModules.DeviceInfoGet)
const App = () => {
  function handleGetDeviceId(){
    console.log('Getting device id...');
    console.log(DeviceInfoGet.getConstants())
    DeviceInfoGet.getDeviceID((err, deviceID) => {
                    if (err) {
                        // error
                    } else {
                        console.log(deviceID);
                    }
                })
  }
  function handleGetIpAddress(){
    console.log('Getting Ip Address...');
    DeviceInfoGet.getDeviceIPAddress((error,ipAddress)=>{
      if (!error) {
        console.log("IP Address: ", ipAddress);
    } else {
        console.error(error);
    }
    })
  }
  function handleGetAaid(){
    console.log('Getting Ip Address...');
    DeviceInfoGet.getAAID((error, aaid) => {
      if (!error) {
          console.log("Google Advertising ID: ", aaid);
      } else {
          console.error(error);
      }
  });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGetDeviceId} style={styles.button}>
        <Text>Get Device Info</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGetIpAddress} style={styles.button}>
        <Text>Get IP Address</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGetAaid} style={styles.button}>
        <Text>Get AAID</Text>
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
    backgroundColor:'#119922',
    alignItems:'center',
    padding:8,
    borderRadius:8,
    margin:8,
  }
})
