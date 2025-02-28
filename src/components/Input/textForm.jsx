import { useState } from "react";
import { StyleSheet, TextInput, Text } from "react-native";

const maxDescriptionLength = 500;

function TextForm({ info, setter }) {
    const [value, setValue] = useState("");

    const handleChange = value => {
        setValue(value);
        setter(prev => ({ ...prev, [info.identifier]: value }));
    };

    return (
        <>
            <TextInput
                placeholder={info.label}
                placeholderTextColor="#aaa"
                value={value}
                onChangeText={handleChange}
                keyboardType={
                    info.identifier === "email" ? "email-address" : "default"
                }
                autoCapitalize={
                    info.identifier === "email" ? "none" : "sentences"
                }
                autoComplete={info.identifier === "email" ? "email" : "off"}
                multiline={info.identifier === "description"}
                numberOfLines={info.identifier === "description" ? 10 : 1}
                maxLength={
                    info.identifier === "description"
                        ? maxDescriptionLength
                        : 30
                }
                style={[
                    styles.input,
                    info.identifier === "description" && {
                        height: 200,
                    },
                ]}
                textAlignVertical="top"
            />
            {info.identifier === "description" && (
                <Text
                    style={
                        styles.descriptionLength
                    }>{`${value.length} / ${maxDescriptionLength}`}</Text>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        fontSize: 16,
        backgroundColor: "#f9f9f9",
    },
    descriptionLength: {
        color: "#aaa",
        alignSelf: "flex-end",
    },
});

export { TextForm };
