import { useContext } from "react";
import {
    Modal,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Dimensions,
    SafeAreaView,
} from "react-native";
import { Global } from "../../context";
import Theme from "../../theme";
import str from "../../localized";

const { height, width } = Dimensions.get("screen");

function SideMenu({ nav }) {
    const { menu, setMenu, currentPage, setCurrentPage } = useContext(Global);

    const handleCloseModal = () => setMenu(false);

    const handleSelect = selected => {
        setCurrentPage(selected);
        nav(selected);

        handleCloseModal();
    };

    return menu && (
        <View style={styles.container}>
            <View style={styles.menu}>
                <SafeAreaView style={styles.menuTextContainer}>
                    {str.sideMenu.map(element => {
                        const hasBeenSelected = currentPage === element[0];
                        return (
                            <TouchableOpacity
                                style={[
                                    styles.menuOption,
                                    hasBeenSelected &&
                                        styles.selectedOption,
                                ]}
                                key={"sidebar-" + element[0]}
                                onPress={() => handleSelect(element[0])}>
                                <Text
                                    style={[
                                        styles.text,
                                        hasBeenSelected &&
                                            styles.selectedText,
                                    ]}>
                                    {element[1]}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </SafeAreaView>
            </View>
            <TouchableOpacity
                style={styles.mask}
                onPress={handleCloseModal}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        zIndex: 1,
        flexDirection: "row",
        width,
        height,
    },
    menu: {
        backgroundColor: Theme.background[2],
        width: width * 0.6,
        height,
    },
    mask: {
        flexGrow: 1,
        backgroundColor: "rgba(0, 0, 0, 0.25)",
    },
    menuTextContainer: {
        marginTop: 50,
        alignContent: "flex-start",
    },
    menuOption: {
        width: "100%",
        marginBottom: 10,
    },
    text: {
        alignSelf: "flex-end",
        width: "90%",
        color: Theme.text[1],
        lineHeight: 35,
        fontSize: 16,
        fontWeight: "600",
    },
    selectedOption: {
        backgroundColor: Theme.background[3],
    },
    selectedText: {
        color: Theme.text[3],
    },
});

export { SideMenu };
