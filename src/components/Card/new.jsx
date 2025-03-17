import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Dimensions,
    View,
    Image,
} from 'react-native';
import Theme from '../../theme';
import str from '../../localized';
import {shortDateDayFormat} from '../../tools';

const {width} = Dimensions.get('screen');

function NewCard({data, nav}) {
    const handlePress = () => {
        nav('Article', {...data});
    };

    return (
        <TouchableOpacity style={styles.card} onPress={handlePress}>
            <Image
                source={{uri: str.website + data.image}}
                style={styles.image}
            />
            <View style={styles.content}>
                <Text style={styles.title} allowFontScaling={false}>
                    {data.title}
                </Text>
                <Text style={styles.description} allowFontScaling={false}>
                    {data.description}
                </Text>
                <View style={styles.footer}>
                    <Text style={styles.date} allowFontScaling={false}>
                        {str.date(shortDateDayFormat(data.createdAt))}
                    </Text>
                    {data.tag.split(';').length > 1 && (
                        <Text style={styles.tag} allowFontScaling={false}>
                            #{data.tag.replace(/;/g, ' #')}
                        </Text>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        alignSelf: 'center',
        width: width * 0.9,
        backgroundColor: Theme.background[4],
        borderRadius: 10,
        shadowColor: Theme.background[7],
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginVertical: 10,
        overflow: 'hidden',
    },
    image: {
        backgroundColor: 'gray',
        alignSelf: 'center',
        width: '100%',
        height: 160,
        resizeMode: 'cover',
        marginBottom: 10,
    },
    content: {
        paddingLeft: 15,
        paddingBottom: 15,
        paddingRight: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Theme.text[2],
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: Theme.text[2],
        marginBottom: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    date: {
        fontSize: 13,
    },
    tag: {
        backgroundColor: Theme.background[1],
        color: Theme.text[1],
        fontSize: 12,
        fontWeight: 'bold',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
});

export {NewCard};
