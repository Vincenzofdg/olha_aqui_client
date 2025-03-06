import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Dimensions,
    View,
    Image,
    Platform,
} from "react-native";
import str from "../../localized";
import Theme from "../../theme";
import {phone} from "../../tools";

const { width } = Dimensions.get("screen");

function PublicContact({data}) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: str.card.contact.imgPath }}
                style={styles.image}
            />
            <View style={styles.diagonalBackground} />
            <View style={styles.overlay}>
                <Text style={styles.title}>{str.card.contact.content}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => phone(data)}>
                    <Text style={styles.buttonText}>
                        {str.card.contact.btn}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.background[4],
        alignSelf: "center",
        width: width * 0.9,
        height: 200,
        flexDirection: "row",
        borderRadius: 10,
        overflow: "hidden",
        position: "relative",
        marginTop: 80,
        shadowColor: "#000",
        shadowOffset: { width: -2, height: 2 },
        shadowOpacity: Platform.OS === "ios" ? 0.4 : 1,
        shadowRadius: Platform.OS === "ios" ? 2 : 12,
        elevation: 4,
    },
    image: {
        width: "50%",
        height: "100%",
    },
    diagonalBackground: {
        backgroundColor: Theme.background[4],
        position: "absolute",
        right: -18,
        top: -130,
        bottom: -70,
        width: "60%",
        transform: [{ rotate: "10deg" }],
    },
    overlay: {
        width: "60%",
        padding: 15,
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 15,
        fontWeight: "700",
        color: Theme.text[2],
        marginBottom: 20,
        textAlign: "right",
    },
    button: {
        alignSelf: "flex-end",
        backgroundColor: Theme.background[1],
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: Theme.text[1],
        fontWeight: "bold",
        fontSize: 14,
    },
});

export { PublicContact };
