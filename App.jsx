import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

import {
  getOsVersion,
  getDeviceId,
  getIpAddress,
  getAaid,
  getDeviceBrand,
  getDeviceModel,
  getScreenSize
} from './deviceInfo/index'

const App = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    osVersion: '',
    deviceId: '',
    ipAddress: '',
    aaid: '',
    brand: '',
    model: '',
    screenSize: ''
  });

  async function handleGetInfo(infoType, getter) {
    try {
      const info = await getter();
      setDeviceInfo(prevState => ({ ...prevState, [infoType]: info }));
    } catch (error) {
      console.error(`Error getting ${infoType}:`, error);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => handleGetInfo('osVersion', getOsVersion)} style={styles.button}>
        <Text>Get OS Version</Text>
      </TouchableOpacity>
      <Text>OS Version: {deviceInfo.osVersion}</Text>

      <TouchableOpacity onPress={() => handleGetInfo('deviceId', getDeviceId)} style={styles.button}>
        <Text>Get Device ID</Text>
      </TouchableOpacity>
      <Text>Device ID: {deviceInfo.deviceId}</Text>

      <TouchableOpacity onPress={() => handleGetInfo('ipAddress', getIpAddress)} style={styles.button}>
        <Text>Get IP Address</Text>
      </TouchableOpacity>
      <Text>IP Address: {deviceInfo.ipAddress}</Text>

      <TouchableOpacity onPress={() => handleGetInfo('aaid', getAaid)} style={styles.button}>
        <Text>Get AAID</Text>
      </TouchableOpacity>
      <Text>AAID: {deviceInfo.aaid}</Text>

      <TouchableOpacity onPress={() => handleGetInfo('brand', getDeviceBrand)} style={styles.button}>
        <Text>Get Device Brand</Text>
      </TouchableOpacity>
      <Text>Device Brand: {deviceInfo.brand}</Text>

      <TouchableOpacity onPress={() => handleGetInfo('model', getDeviceModel)} style={styles.button}>
        <Text>Get Device Model</Text>
      </TouchableOpacity>
      <Text>Device Model: {deviceInfo.model}</Text>

      <TouchableOpacity onPress={() => handleGetInfo('screenSize', getScreenSize)} style={styles.button}>
        <Text>Get Screen Size</Text>
      </TouchableOpacity>
      <Text>Screen Size: {
        deviceInfo.screenSize 
          ? `${deviceInfo.screenSize.width}x${deviceInfo.screenSize.height}, Density: ${deviceInfo.screenSize.density}`
          : ''
      }</Text>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
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