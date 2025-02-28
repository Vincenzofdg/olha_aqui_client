import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";
// import Theme from '../../theme';
// import str from "../../localized";
import { GenericHeader } from "../../components/Header";

function Article({ navigation: { navigate }, route: { params } }) {
    console.log(params);
    return (
        <SafeAreaView style={styles.container}>
            <GenericHeader nav={navigate} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
});

export default Article;
