import {
    StyleSheet,
    Text,
    Dimensions,
    View,
    TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import str from '../../localized';
import Theme from '../../theme';
import {shortDateDayFormat} from '../../tools';

const {width} = Dimensions.get('screen');

function JurisprudenceCard({data}) {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('LawWebView', {link: data.link});
    };

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.title} allowFontScaling={false}>
                {data.title}
            </Text>
            <Text style={styles.description} allowFontScaling={false}>
                {data.description}
            </Text>
            <Text style={styles.date} allowFontScaling={false}>
                {str.date(shortDateDayFormat(data.createdAt))}
            </Text>
            <Text style={styles.source} allowFontScaling={false}>
                {str.lawSource(data.source)}
            </Text>
            <TouchableOpacity onPress={handlePress} style={styles.linkBtn}>
                <Text style={styles.btnText} allowFontScaling={false}>
                    {str.access}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: Theme.background[4],
        alignSelf: 'center',
        borderRadius: 12,
        padding: 12,
        width: width * 0.9,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 6,
        elevation: 3,
        marginVertical: 8,
    },
    title: {
        color: Theme.text[2],
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        color: Theme.text[2],
        fontSize: 13,
        marginBottom: 13,
        textAlign: 'justify',
    },
    date: {
        fontSize: 13,
        color: Theme.text[3],
        marginBottom: 4,
    },
    source: {
        fontSize: 13,
        color: Theme.text[3],
    },
    linkBtn: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 100,
        padding: 2,
    },
    btnText: {
        fontSize: 14,
        color: Theme.text[4],
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export {JurisprudenceCard};
