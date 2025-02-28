import {
    StyleSheet,
    Text,
    Dimensions,
    View,
    TouchableOpacity,
} from "react-native";
import Theme from "../../theme";
import { shortDateDayFormat } from "../../tools";
import str from "../../localized";
const { width } = Dimensions.get("screen");

function EventCard({ data, nav }) {
    const handlePress = () => {
        console.log(data);
    };

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.description}>{data.description}</Text>
            <Text style={styles.date}>
                {str.date(shortDateDayFormat(data.createdAt))}
            </Text>
            <Text style={styles.location}>{data.location}</Text>
            <TouchableOpacity onPress={handlePress} style={styles.linkBtn}>
                <Text style={styles.btnText}>{str.access}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: Theme.background[4],
        alignSelf: "center",
        borderRadius: 12,
        padding: 12,
        width: width * 0.9,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 3,
        marginVertical: 8,
    },
    title: {
        color: Theme.text[2],
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 8,
    },
    description: {
        color: Theme.text[2],
        fontSize: 13,
        marginBottom: 13,
        textAlign: "justify",
    },
    date: {
        fontSize: 13,
        color: Theme.text[3],
        marginBottom: 4,
    },
    location: {
        fontSize: 13,
        color: Theme.text[3],
    },
    linkBtn: {
        position: "absolute",
        bottom: 10,
        right: 10,
        width: 120,
        padding: 2,
    },
    btnText: {
        fontSize: 14,
        color: Theme.text[4],
        fontWeight: "bold",
        textAlign: "center",
    },
});

export { EventCard };
