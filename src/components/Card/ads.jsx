import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    Dimensions,
    View,
    TouchableOpacity,
    Image,
    Linking,
    Alert,
} from "react-native";
import Theme from "../../theme";
import str from "../../localized";
import { shortDateDayFormat } from "../../tools";
import { getPhoneByAds } from "../../service/action/ads";

const { width } = Dimensions.get("screen");

function AdCard({ data, nav }) {
    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: data.image }} style={styles.image} resizeMode="cover" />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{data.title}</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={styles.date}>{shortDateDayFormat(data.createdAt)}</Text>
                    <Text style={styles.date}>#{data.tag.replace(/;/g, " #")}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        // position: "relative",
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
