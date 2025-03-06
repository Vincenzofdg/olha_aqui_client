import {
    Modal,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Dimensions,
    ScrollView,
} from 'react-native';
import Theme from '../../theme';
import str from '../../localized';

const {height, width} = Dimensions.get('screen');

function FilterAds({list, isOpen, closeModal, setter}) {
    const handleCloseModal = () => closeModal(p => !p);

    const btnElement = text => {
        const formatedText =
            (!text ? str.all : text).charAt(0).toUpperCase() +
            (!text ? str.all : text).slice(1).toLowerCase();
        const handleSelect = () => {
            setter(text);
            handleCloseModal();
        };

        return (
            <TouchableOpacity
                key={text}
                style={styles.btnContainer}
                onPress={handleSelect}>
                <Text style={styles.btnText}>{formatedText}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <Modal animationType="fade" transparent={true} visible={isOpen}>
            <View style={styles.container}>
                <ScrollView style={styles.optionsContainer}>
                    {btnElement(undefined)}
                    {list.map(elem => btnElement(elem))}
                </ScrollView>
                <TouchableOpacity
                    style={styles.mask}
                    onPress={handleCloseModal}
                />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 1,
        width,
        height,
    },
    optionsContainer: {
        position: 'absolute',
        zIndex: 2,
        top: height * 0.2,
        alignSelf: 'center',
        backgroundColor: Theme.background[3],
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 20,
        width: width * 0.7,
        minHeight: height * 0.2,
        maxHeight: height * 0.5,
        // height: width * 0.7,
        padding: 20,
    },
    btnContainer: {
        padding: 10,
    },
    btnText: {
        fontSize: 18,
        fontWeight: '700',
    },
    mask: {
        flexGrow: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
});

export {FilterAds};
