import React, { useState } from "react";
import { FormControl, HStack, Input, Text, View, VStack } from "native-base";

const LabeledInputField = (props) => {
    const [label, setLabel] = useState(props.labelName);
    const [placeholder, setExample] = useState(props.placeholderName);
    const [keyboardType, setKeyboardType] = useState(props.keyboardType);
    const [requiredField, setRequiredField] = useState(props.requiredField);
    const [displayErrorMessage, setDisplayErrorMessage] = useState(props.displayErrorMessage);
    const [errorMessageContent, setErrorMessageContent] = useState(props.errorMessageContent);

    return (
        <View>
            <FormControl isRequired={requiredField} isInvalid={displayErrorMessage}>
                <FormControl.Label> { label } </FormControl.Label>
                <Input
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    onChangeText={props.callbackFunction}
                />
                {
                    displayErrorMessage && 
                    <FormControl.ErrorMessage> { errorMessageContent } </FormControl.ErrorMessage>
                }
            </FormControl>
        </View>
    );
}

export default LabeledInputField;