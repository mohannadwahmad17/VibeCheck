import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";

const Stack = createNativeStackNavigator();

const LoginSignupStackNavigator = (props) => {

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignUp} />
        </Stack.Navigator>
    );
}

export default LoginSignupStackNavigator;