import {NativeModules} from 'react-native'
const {GetDeviceInfo} = NativeModules

function getOsVersion() {
  console.log('Getting OS Version...')
  return new Promise((resolve, reject) => {
    GetDeviceInfo.getOSVersion((error, osVersion) => {
      if (!error) {
        console.log('OS Version: ', osVersion)
        resolve(osVersion)
      } else {
        console.error(error)
        reject(error)
      }
    })
  })
}

function getDeviceId() {
  console.log('Getting device id...')
  return new Promise((resolve, reject) => {
    GetDeviceInfo.getDeviceID((error, deviceID) => {
      if (!error) {
        console.log('Device ID: ', deviceID)
        resolve(deviceID)
      } else {
        console.error(error)
        reject(error)
      }
    })
  })
}

function getIpAddress() {
  console.log('Getting Ip Address...')
  return new Promise((resolve, reject) => {
    GetDeviceInfo.getDeviceIPAddress((error, ipAddress) => {
      if (!error) {
        console.log('IP Address: ', ipAddress)
        resolve(ipAddress)
      } else {
        console.error(error)
        reject(error)
      }
    })
  })
}

function getAaid() {
  console.log('Getting AAID...')
  return new Promise((resolve, reject) => {
    GetDeviceInfo.getAAID((error, aaid) => {
      if (!error) {
        console.log('Google Advertising ID: ', aaid)
        resolve(aaid)
      } else {
        console.error(error)
        reject(error)
      }
    })
  })
}

function getDeviceBrand() {
  console.log('Getting Device Brand...')
  return new Promise((resolve, reject) => {
    GetDeviceInfo.getDeviceBrand((error, brand) => {
      if (!error) {
        console.log('Device Brand: ', brand)
        resolve(brand)
      } else {
        console.error(error)
        reject(error)
      }
    })
  })
}

function getDeviceModel() {
  console.log('Getting Device Model...')
  return new Promise((resolve, reject) => {
    GetDeviceInfo.getDeviceModel((error, model) => {
      if (!error) {
        console.log('Device Model: ', model)
        resolve(model)
      } else {
        console.error(error)
        reject(error)
      }
    })
  })
}

function getScreenSize() {
  console.log('Getting Screen Size...')
  return new Promise((resolve, reject) => {
    GetDeviceInfo.getScreenSize((error, width, height, density) => {
      if (!error) {
        const screenInfo = { width, height, density }
        console.log(`Screen Size: ${width}x${height}, Density: ${density}`)
        resolve(screenInfo)
      } else {
        console.error(error)
        reject(error)
      }
    })
  })
}

export {
  getOsVersion,
  getDeviceId,
  getIpAddress,
  getAaid,
  getDeviceBrand,
  getDeviceModel,
  getScreenSize,
}