package com.sdk;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import android.os.Build;
import android.net.wifi.WifiManager;
import android.content.Context;

import java.net.InetAddress;
import java.net.NetworkInterface;
import java.util.Collections;
import java.util.List;

public class CustomDeviceInfoModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public DeviceInfoModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "CustomDeviceInfo";
    }

    @ReactMethod
    public void getCustomDeviceInfo(Promise promise) {
        try {
            String ipAddress = getIPAddress();
            String deviceName = Build.MODEL;
            String osVersion = Build.VERSION.RELEASE;

            String deviceInfo = String.format("IP: %s, Device: %s, OS: %s",
                    ipAddress, deviceName, osVersion);
            promise.resolve(deviceInfo);
        } catch (Exception e) {
            promise.reject("ERROR", e.getMessage());
        }
    }

    @ReactMethod
    public void getIPAddress(Promise promise) {
        try {
            WifiManager wm = (WifiManager) reactContext.getApplicationContext().getSystemService(Context.WIFI_SERVICE);
            WifiInfo wifiInfo = wm.getConnectionInfo();
            int ipAddress = wifiInfo.getIpAddress();
            String ipString = String.format(Locale.US, "%d.%d.%d.%d",
                    (ipAddress & 0xff),
                    (ipAddress >> 8 & 0xff),
                    (ipAddress >> 16 & 0xff),
                    (ipAddress >> 24 & 0xff));
            promise.resolve(ipString);
        } catch (Exception e) {
            promise.reject("Error", e);
        }
    }
}
