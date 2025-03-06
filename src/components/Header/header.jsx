import {StyleSheet, Dimensions, View} from 'react-native';
import {GoBackBtn} from '../Button';

const {width} = Dimensions.get('screen');

function GenericHeader() {
    return (
        <View style={styles.container}>
            <GoBackBtn />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width,
    },
});

export {GenericHeader};
