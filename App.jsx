import React from 'react';
import { NativeModules, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const { DeviceInfoGet } = NativeModules;

console.log(DeviceInfoGet.getDeviceID);

const App = () => {
  function handleGetOSVersion(){
    console.log('Getting OS Version...');
    DeviceInfoGet.getOSVersion((error, osVersion) => {
      if (!error) {
        console.log("OS Version: ", osVersion);
      } else {
        console.error(error);
      }
    });
  }

  function handleGetDeviceId() {
    console.log('Getting device id...');
    DeviceInfoGet.getDeviceID((err, deviceID) => {
      if (err) {
        console.error(err);
      } else {
        console.log(deviceID);
      }
    });
  }

  function handleGetIpAddress() {
    console.log('Getting Ip Address...');
    DeviceInfoGet.getDeviceIPAddress((error, ipAddress) => {
      if (!error) {
        console.log("IP Address: ", ipAddress);
      } else {
        console.error(error);
      }
    });
  }

  function handleGetAaid() {
    console.log('Getting AAID...');
    DeviceInfoGet.getAAID((error, aaid) => {
      if (!error) {
        console.log("Google Advertising ID: ", aaid);
      } else {
        console.error(error);
      }
    });
  }

  function handleGetDeviceBrand() {
    console.log('Getting Device Brand...');
    DeviceInfoGet.getDeviceBrand((error, brand) => {
      if (!error) {
        console.log("Device Brand: ", brand);
      } else {
        console.error(error);
      }
    });
  }

  function handleGetDeviceModel() {
    console.log('Getting Device Model...');
    DeviceInfoGet.getDeviceModel((error, model) => {
      if (!error) {
        console.log("Device Model: ", model);
      } else {
        console.error(error);
      }
    });
  }

  function handleGetScreenSize() {
    console.log('Getting Screen Size...');
    DeviceInfoGet.getScreenSize((error, width, height, density) => {
      if (!error) {
        console.log(`Screen Size: ${width}x${height}, Density: ${density}`);
      } else {
        console.error(error);
      }
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGetOSVersion} style={styles.button}>
        <Text>Get OS Version</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGetDeviceId} style={styles.button}>
        <Text>Get Device ID</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGetIpAddress} style={styles.button}>
        <Text>Get IP Address</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGetAaid} style={styles.button}>
        <Text>Get AAID</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGetDeviceBrand} style={styles.button}>
        <Text>Get Device Brand</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGetDeviceModel} style={styles.button}>
        <Text>Get Device Model</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGetScreenSize} style={styles.button}>
        <Text>Get Screen Size</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 160,
    backgroundColor: '#119922',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    margin: 8,
  }
});
