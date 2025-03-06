import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Theme from "../../theme";

function GoBackBtn() {
    const navigation = useNavigation();

    const handlePress = () => navigation.goBack();

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            {Array.from({ length: 2 }).map((_a, i) => (
                <View
                    key={"menu-bar-" + i}
                    style={[styles.TopBar, i === 1 && styles.bottomBar]}
                />
            ))}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "flex-start",
        marginTop: 5,
        marginLeft: 10,

        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        padding: 10,
    },
    TopBar: {
        backgroundColor: Theme.background[4],
        height: 3,
        width: "90%",
        borderRadius: 20,
        marginBottom: 5,
        marginTop: 5,
        transform: [{ rotate: "-30deg" }],
    },
    bottomBar: {
        transform: [{ rotate: "30deg" }],
    },
});

export { GoBackBtn };
