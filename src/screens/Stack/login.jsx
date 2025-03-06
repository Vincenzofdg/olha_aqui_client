import {StyleSheet, SafeAreaView, Image, Dimensions} from 'react-native';
import LogoImg from '../../assets/logo.png';
import {LoginBtn} from '../../components/Button';
import Background from '../../components/background';

const {width} = Dimensions.get('screen');

function LogIn({navigation: {navigate}}) {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Image style={styles.logo} source={LogoImg} />
                <LoginBtn nav={navigate} />
            </SafeAreaView>
            <Background type={'cover'} index={1} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: width * 0.85,
        objectFit: 'contain',
        marginBottom: 20,
    },
});

export default LogIn;
