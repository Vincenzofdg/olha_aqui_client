import { StyleSheet, Dimensions, View } from "react-native";
import { GoBackBtn } from "../Button";

const { width } = Dimensions.get("screen");

function GenericHeader() {
    return (
        <View style={styles.container}>
            <GoBackBtn />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
    },
});

export { GenericHeader };
