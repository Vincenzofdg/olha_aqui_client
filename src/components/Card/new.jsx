import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Dimensions,
    View,
    Image,
} from "react-native";
import Theme from "../../theme";
import str from "../../localized";
import { shortDateDayFormat } from "../../tools";

const { width } = Dimensions.get("screen");

function NewCard({ data, nav }) {
    const handlePress = () => {
        nav("Article", { ...data });
    };

    return (
        <View style={styles.card}>
            <Image source={{ uri: data.image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <View style={styles.footer}>
                    <Text style={styles.date}>
                        {str.date(shortDateDayFormat(data.createdAt))}
                    </Text>
                    <TouchableOpacity
                        onPress={handlePress}
                        style={styles.button}>
                        <Text style={styles.buttonText}>{str.seeMore}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        alignSelf: "center",
        width: width * 0.9,
        backgroundColor: Theme.background[4],
        borderRadius: 10,
        shadowColor: Theme.background[7],
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginVertical: 10,
        overflow: "hidden",
    },
    image: {
        alignSelf: "center",
        width: "100%",
        height: 160,
        resizeMode: "cover",
        marginBottom: 10,
    },
    content: {
        paddingLeft: 15,
        paddingBottom: 15,
        paddingRight: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: Theme.text[2],
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: Theme.text[2],
        marginBottom: 10,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    date: {
        fontSize: 13,
    },
    button: {
        backgroundColor: Theme.background[1],
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: Theme.text[1],
        fontSize: 12,
        fontWeight: "bold",
    },
});

export { NewCard };
