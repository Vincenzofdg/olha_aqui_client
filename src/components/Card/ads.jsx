import {
    StyleSheet,
    Text,
    Dimensions,
    View,
    TouchableOpacity,
    Image,
} from "react-native";
import Theme from "../../theme";
import str from "../../localized";
import { shortDateDayFormat } from "../../tools";

const { width } = Dimensions.get("screen");

function AdCard({ data, nav }) {
    const handlePress = () => nav('Ad', data);

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
            <Image source={{ uri: str.website + data.image }} style={styles.image} resizeMode="cover" />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{data.title}</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={styles.date}>{shortDateDayFormat(data.createdAt)}</Text>
                    {data.tag.split(';').length > 1 && (
                        <Text style={styles.date}>#{data.tag.replace(/;/g, " #")}</Text>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        alignSelf: "center",
        borderRadius: 12,
        width: width * 0.9,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 3,
        marginVertical: 8,
        flexDirection: "row",
        overflow: "hidden",
    },
    image: {
        backgroundColor: "black",
        width: "100%",
        height: "190",
    },
    textContainer: {
        padding: 10,
        position: "absolute",
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.55)",
        width: "100%",
    },
    title: {
        color: Theme.text[1],
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 8,
    },
    date: {
        fontSize: 12,
        color: Theme.text[1],

    },
    linkBtn: {
        marginTop: 10,
        backgroundColor: Theme.background[5],
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignSelf: "flex-start",
    },
    btnText: {
        fontSize: 14,
        color: Theme.text[1],
        fontWeight: "bold",
        textAlign: "center",
    },
});

export { AdCard };
