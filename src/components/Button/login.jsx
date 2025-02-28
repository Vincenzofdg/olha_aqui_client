import { useContext } from "react";
import { StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";
import { Global } from "../../context";
import str from "../../localized";

import Theme from "../../theme";

const { width } = Dimensions.get("screen");

function LoginBtn({ nav }) {
    const { setLoader } = useContext(Global);

    const handlePress = async () => {
        setLoader(true);
        nav("Home");
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Text style={styles.text}>{str.loginBtn.toUpperCase()}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.background[2],
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 25,
        paddingRight: 25,
        width: width * 0.55,
        borderRadius: 10,
    },
    text: {
        color: Theme.text[1],
        textAlign: "center",
        fontSize: 18,
        fontWeight: "700",
    },
});

export { LoginBtn };
