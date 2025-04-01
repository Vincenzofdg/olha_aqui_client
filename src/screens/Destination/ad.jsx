import {
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import str from '../../localized';
import {GenericHeader} from '../../components/Header';
import WhatsImg from '../../assets/whatsapp.png';
import PhoneImg from '../../assets/phone.png';
import {phone, whatsapp} from '../../tools';

const {width, height} = Dimensions.get('screen');

function Ad({navigation: {navigate}, route: {params}}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.goBackContainer}>
                <GenericHeader nav={navigate} />
            </View>
            <Image
                source={{uri: str.website + params.image}}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={styles.contactContainer}>
                {params?.whatsapp.length > 0 && (
                    <TouchableOpacity
                        onPress={() => whatsapp(params?.whatsapp)}>
                        <Image
                            source={WhatsImg}
                            style={styles.phoneImg}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                )}
                {params?.phone.length > 0 && (
                    <TouchableOpacity onPress={() => phone(params?.phone)}>
                        <Image
                            source={PhoneImg}
                            style={styles.phoneImg}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    goBackContainer: {
        position: 'absolute',
        zIndex: 1,
    },
    image: {
        width,
        height,
    },
    contactContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    phoneImg: {
        height: 50,
        width: 50,
    },
});

export default Ad;
