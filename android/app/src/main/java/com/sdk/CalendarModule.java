package com.sdk;

// replace your-apps-package-name with your app’s package name
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class CalendarModule extends ReactContextBaseJavaModule {
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(Callback callback){
        Log.d("Calendar Module","Logged from our calendar module");
        callback.invoke("Data returned from native calendar module.");
    }

    //from docs
//    @ReactMethod
//    public void createCalendarEvent(String name, String location) {
//        Log.d("CalendarModule", "Create event called with name: " + name
//                + " and location: " + location);
//    }

    @ReactMethod
    public void createCalendarPromise(Promise promise){
        try{
            promise.resolve("Data returned from promise");
        }catch(Exception e){
            promise.reject("Error returned from promise.");
        }
    }
}