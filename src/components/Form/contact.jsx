import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Dimensions,
} from "react-native";
import str from "../../localized";
import Theme from "../../theme";
import { TextForm } from "../Input";
import { SendBtn } from "../Button";
import { contactForm } from "../../tools";

const { width } = Dimensions.get("screen");

function ContactForm() {
    const [submitedStatus, setSubmitedStatus] = useState(false);
    const [stateListener, setStateListener] = useState({
        name: "",
        surname: "",
        email: "",
        description: "",
    });

    useEffect(() => {
        const canBeSubmited = contactForm(stateListener);
        setSubmitedStatus(canBeSubmited);
    }, [stateListener]);

    const handleSubmit = () => {
        // console.log('aaaaa')
    };

    return (
        <View style={styles.container}>
            {str.form.contact.map((field, i) => (
                <TextForm
                    key={"contactForm-" + i}
                    info={field}
                    setter={setStateListener}
                />
            ))}
            <SendBtn action={handleSubmit} canBenPressed={submitedStatus} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 20,
    },
    title: {
        fontSize: 18,
        color: "#001f3f",
        textAlign: "left",
        marginBottom: 20,
        fontWeight: "bold",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        fontSize: 16,
        backgroundColor: "#f9f9f9",
    },
    dropdown: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        marginBottom: 12,
        backgroundColor: "#f9f9f9",
    },
    dropdownContainer: {
        borderColor: "#ddd",
        backgroundColor: "#fff",
    },
    textArea: {
        height: 100,
        textAlignVertical: "top",
    },
    button: {
        backgroundColor: "#0C313A",
        borderRadius: 8,
        paddingVertical: 10,
        alignItems: "center",
        marginTop: 10,
        alignSelf: "center",
        width: width * 0.5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export { ContactForm };
