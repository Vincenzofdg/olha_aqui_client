import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Dimensions,
    View,
    Image,
    Platform,
} from "react-native";
import ModalIcon from "../../assets/PredioIcon.png";
import str from "../../localized";
import Theme from "../../theme";
import {openBrowser} from '../../tools';

const { width } = Dimensions.get("screen");

function PublicAnnounce({data}) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{str.card.announce.title}</Text>
                <Text style={styles.description}>
                    {str.card.announce.content}
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => openBrowser(data)}>
                    <Text style={styles.buttonText}>
                        {str.card.announce.btn}
                    </Text>
                </TouchableOpacity>
            </View>
            <Image
                source={ModalIcon}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.background[4],
        alignSelf: "center",
        width: width * 0.9,
        height: 260,
        flexDirection: "row",
        borderRadius: 15,
        overflow: "hidden",
        position: "relative",
        marginTop: 30,
        shadowColor: "#000000",
        shadowOffset: {
            width: -2,
            height: 2,
        },
        shadowOpacity: Platform.OS === "ios" ? 0.4 : 1,
        shadowRadius: Platform.OS === "ios" ? 2 : 12,
        elevation: 4,
    },
    textContainer: {
        flex: 2,
        justifyContent: "space-around",
        padding: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    description: {
        width: "95%",
        textAlign: "left",
        paddingLeft: 5,
        fontSize: 15,
        lineHeight: 20,
    },
    button: {
        backgroundColor: Theme.background[5],
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 20,
        alignSelf: "flex-start",
    },
    buttonText: {
        color: Theme.text[1],
        fontWeight: "bold",
        fontSize: 14,
    },
    image: {
        flex: 1,
        width: "62%",
        height: "62%",
        position: "absolute",
        bottom: -23,
        right: -45,
    },
});

export { PublicAnnounce };
