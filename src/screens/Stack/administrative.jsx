import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {MenuBtn} from '../../components/Button';
import {SideMenu} from '../../components/Modal';

function Administrative({navigation: {navigate}}) {
    return (
        <SafeAreaView style={styles.container}>
            <MenuBtn />
            <Text>ADMINISTRATIVO</Text>
            <SideMenu nav={navigate} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});

export default Administrative;
