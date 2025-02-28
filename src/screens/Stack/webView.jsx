import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { GenericHeader } from "../../components/Header";

function LawWebView({ route }) {
    const { link } = route.params;

    return (
        <View style={styles.container}>
            <GenericHeader />
            <WebView source={{ uri: link }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default LawWebView;
