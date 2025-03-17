import {
    StyleSheet,
    Text,
    Dimensions,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import Theme from '../../theme';
import str from '../../localized';
import {shortDateDayFormat} from '../../tools';

const {width} = Dimensions.get('screen');

function AdCard({data, nav}) {
    const handlePress = () => nav('Ad', data);

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
            <Image
                source={{uri: str.website + data.image}}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.textContainer}>
                <Text style={styles.date} allowFontScaling={false}>
                    {shortDateDayFormat(data.createdAt)}
                </Text>
                {data.tag.split(';').length > 1 && (
                    <Text style={styles.tags} allowFontScaling={false}>
                        #{data.tag.replace(/;/g, ' #')}
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        alignSelf: 'center',
        borderRadius: 12,
        width: width * 0.9,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 6,
        elevation: 3,
        marginVertical: 8,
        backgroundColor: Theme.background[4], 
        overflow: 'hidden',
    },
    image: {
        backgroundColor: 'black',
        width: '100%',
        height: 190,
    },
    textContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: 10,
        backgroundColor: Theme.background[4], 
        width: '100%',
    },
    date: {
        fontSize: 12,
        color: Theme.text[2],
        fontWeight: 'bold',
    },
    tags: {
        fontSize: 12,
        color: Theme.text[3],
    },
});

export {AdCard};

