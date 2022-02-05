import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";

const Stack = createNativeStackNavigator();

const LoginSignupStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={SignUp}/>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    );
}

export default LoginSignupStackNavigator;