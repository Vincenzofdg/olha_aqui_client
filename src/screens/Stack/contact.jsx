import {useContext} from 'react';
import {Global} from '../../context';
import {StyleSheet, SafeAreaView, Text, ScrollView, View} from 'react-native';
import str from '../../localized';
import Theme from '../../theme';
import {MenuBtn} from '../../components/Button';
import {SideMenu} from '../../components/Modal';
import {ContactForm} from '../../components/Form';

function Contact({navigation: {navigate}}) {
    const {menu} = useContext(Global);
    return (
        <SafeAreaView style={styles.container}>
            <SideMenu nav={navigate} />
            {!menu && <MenuBtn />}
            <ScrollView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title} allowFontScaling={false}>
                        {str.contactTitle}
                    </Text>
                    <Text style={styles.subtitle} allowFontScaling={false}>
                        {str.contactSubtitle}
                    </Text>
                </View>
                <ContactForm />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.background[4],
        flex: 1,
        alignItems: 'center',
    },
    header: {
        padding: 10,
        marginTop: 75,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Theme.text[2],
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: Theme.text[2],
    },
});

export default Contact;
