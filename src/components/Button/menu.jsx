import { useContext } from "react";
import { Global } from "../../context";
import { StyleSheet, TouchableOpacity, View, Platform } from "react-native";
import Theme from "../../theme";

function MenuBtn() {
    const { setMenu } = useContext(Global);

    const handlePress = () => setMenu(true);

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            {Array.from({ length: 3 }).map((_a, i) => (
                <View
                    key={"menu-bar-" + i}
                    style={[styles.bar, i === 1 && styles.middleBar]}
                />
            ))}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.background[2],

        position: "absolute",
        zIndex: 1,

        alignSelf: "flex-start",
        marginTop: 20,
        marginLeft: 20,

        borderRadius: 100,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        padding: 5,
        shadowColor: "#000000",
        shadowOffset: {
            width: -2,
            height: 2,
        },
        shadowOpacity: Platform.OS === "ios" ? 0.4 : 1,
        shadowRadius: Platform.OS === "ios" ? 2 : 12,
        elevation: 4,
    },
    bar: {
        backgroundColor: Theme.background[4],
        height: 3,
        width: "65%",
        borderRadius: 20,
    },
    middleBar: {
        margin: 5,
    },
});

export { MenuBtn };
