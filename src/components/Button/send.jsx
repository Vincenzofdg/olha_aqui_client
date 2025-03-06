import {StyleSheet, TouchableOpacity, Text, Dimensions} from 'react-native';
import str from '../../localized';
import Theme from '../../theme';

const {width} = Dimensions.get('screen');

function SendBtn({action, canBenPressed}) {
    const handlePress = async () => {
        action();
    };

    return (
        <TouchableOpacity
            style={[
                styles.container,
                canBenPressed ? styles.selected : styles.disabled,
            ]}
            onPress={handlePress}
            disabled={!canBenPressed}>
            <Text style={styles.text}>{str.send}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 10,
        alignSelf: 'center',
        width: width * 0.5,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    selected: {
        backgroundColor: '#0C313A',
    },
    disabled: {
        backgroundColor: '#9C9C9C',
    },
});

export {SendBtn};
