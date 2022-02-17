import React, { useState } from "react";
import { Button, HStack, Image, KeyboardAvoidingView, Link, Text, View, VStack } from "native-base";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import LabeledInputField from "../components/LabeledInputField";
import loginPageStyles from "../styles/loginStyles";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayEmailError, setEmailError] = useState(false);
    const [displayPasswordError, setPasswordError] = useState(false);

    function handleEmailInput(emailInput) {
        setEmailError(false);
        setEmail(emailInput);
    }

    function handlePasswordInput(passwordInput) {
        setPasswordError(false);
        setPassword(passwordInput);
    }

    function handleSignupLinkClick() {
        navigation.navigate('Signup');
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView style={loginPageStyles.content} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <VStack>
                    <LabeledInputField
                        label="Email"
                        placeholder="Email Address"
                        keyboardType="email-address"
                        callbackFunction={handleEmailInput}
                        displayErrorMessage={displayEmailError}
                        errorMessageContent="Please enter a valid email address"
                    />
                    <LabeledInputField
                        label="Password"
                        placeholder="Password"
                        keyboardType="default"
                        callbackFunction={handlePasswordInput}
                        displayErrorMessage={displayPasswordError}
                        errorMessageContent="The password you entered is incorrect"
                    />
                    <View>
                        <Button>Sign in</Button>
                    </View>
                    <HStack>
                        <Text>Not a member?</Text>
                        <Link onPress={handleSignupLinkClick}>Sign Up!</Link>
                    </HStack>
                </VStack>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

export default Login;