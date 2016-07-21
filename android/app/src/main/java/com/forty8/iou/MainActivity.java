package com.forty8.iou;

import android.content.Intent;

import com.facebook.react.ReactActivity;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.oblador.vectoricons.VectorIconsPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "iou";
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }
}
