import {StyleSheet, ImageBackground, Dimensions} from 'react-native';
import Img1 from '../assets/background/1.png';

const d = Dimensions.get('window');

function Background({type, index}) {
    const imageIndex = {
        1: Img1,
    };

    return (
        <ImageBackground
            source={imageIndex[index]}
            resizeMode={type}
            style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: -1,
        height: d.height,
        width: d.width,
    },
});

export default Background;
