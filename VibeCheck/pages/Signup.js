import { Button, VStack } from "native-base";
import React, { useState } from "react";
import LabeledInputField from "../components/LabeledInputField";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidLastName, setInvalidLastName] = useState(false);
    const [invalidUsername, setInvalidUsername] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [invalidFirstName, setInvalidFirstName] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [invalidConfirmPassword, setInvalidConfirmPassword] = useState(false);

    function handleEmailInput(emailInput) {
        setInvalidEmail(false);
        setEmail(emailInput);
    }

    function handleUsernameInput(usernameInput) {
        setInvalidUsername(false);
        setUsername(usernameInput);
    }

    function handleFirstNameInput(firstNameInput) {
        setInvalidFirstName(false);
        setFirstName(firstNameInput);
    }

    function handleLastNameInput(lastNameInput) {
        setInvalidLastName(false);
        setLastName(lastNameInput);
    }

    function handlePasswordInput(passwordInput) {
        setInvalidPassword(false);
        setPassword(passwordInput);
    }

    function handleConfirmPasswordInput(confirmPasswordInput) {
        setInvalidConfirmPassword(false);
        setConfirmPassword(confirmPasswordInput);
    }

    function submitRegistration() {
        
    }

    return (
        <VStack>
            <LabeledInputField
                label="Email"
                requiredField={true}
                placeholder="Email Address"
                keyboardType="email-address"
                callbackFunction={handleEmailInput}
                displayErrorMessage={invalidEmail}
                errorMessageContent="Please enter a valid email address"
            />
            <LabeledInputField
                label="Username"
                placeholder=""
                keyboardType="default"
                callbackFunction={handleUsernameInput}
                displayErrorMessage={invalidUsername}
            />
            <LabeledInputField
                label="First Name"
                requiredField={true}
                placeholder=""
                keyboardType="default"
                callbackFunction={handleFirstNameInput}
                displayErrorMessage={invalidFirstName}
                errorMessageContent="Please enter a valid first name"
            />
            <LabeledInputField
                label="Last Name"
                requiredField={true}
                placeholder=""
                keyboardType="default"
                callbackFunction={handleLastNameInput}
                displayErrorMessage={invalidLastName}
                errorMessageContent="Please enter a valid last name"
            />
            <LabeledInputField
                label="Password"
                placeholder=""
                keyboardType="default"
                callbackFunction={handlePasswordInput}
                displayErrorMessage={invalidPassword}
                errorMessageContent="Please enter a valid password"
            />
            <LabeledInputField
                label="Confirm Password"
                placeholder=""
                keyboardType="default"
                callbackFunction={handleConfirmPasswordInput}
                displayErrorMessage={invalidConfirmPassword}
                errorMessageContent="The passwords you entered don't match"
            />
            <Button onPress={submitRegistration}>
                Submit
            </Button>
        </VStack>
    );
}

export default SignUp;