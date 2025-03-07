import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Dimensions,
    View,
    Image,
    Platform,
} from 'react-native';
import ModalIcon from '../../assets/PredioIcon.png';
import str from '../../localized';
import Theme from '../../theme';
import {openBrowser} from '../../tools';

const {width} = Dimensions.get('screen');

function PublicAnnounce({data}) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{str.card.announce.title}</Text>
                <Text style={styles.description}>
                    {str.card.announce.content}
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => openBrowser(data)}>
                    <Text style={styles.buttonText}>
                        {str.card.announce.btn}
                    </Text>
                </TouchableOpacity>
            </View>
            <Image
                source={ModalIcon}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.background[4],
        alignSelf: 'center',
        width: width * 0.9,
        maxWidth: 400,
        height: width < 350 ? 220 : 260,
        flexDirection: 'row',
        borderRadius: 15,
        overflow: 'hidden',
        position: 'relative',
        marginTop: 20,
        shadowColor: '#000000',
        shadowOffset: {
            width: -2,
            height: 2,
        },
        shadowOpacity: Platform.OS === 'ios' ? 0.4 : 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 12,
        elevation: 4,
        padding: 8,
    },
    textContainer: {
        flex: 2,
        justifyContent: 'space-between',
        padding: 10,
    },
    title: {
        fontSize: width < 350 ? 15 : 17, 
        fontWeight: 'bold',
    },
    description: {
        width: '95%',
        textAlign: 'left',
        paddingLeft: 3, 
        fontSize: width < 350 ? 12 : 14, 
        lineHeight: 18,
    },
    button: {
        backgroundColor: Theme.background[5],
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: Theme.text[1],
        fontWeight: 'bold',
        fontSize: 13, 
    },
    image: {
        flex: 1,
        width: '58%',
        height: '58%',
        position: 'absolute',
        bottom: width < 350 ? -10 : -20,
        right: width < 350 ? -18 : -40,
    },
});

export {PublicAnnounce};
