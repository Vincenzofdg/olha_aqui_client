import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';

import BuildingImg from '../../assets/building.png';
import PeopleImg from '../../assets/people.png';

import str from '../../localized';
import Theme from '../../theme';
import AdsFiltered from '../../screens/Destination/adFilteredList';

function PublicSector({nav}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{str.card.announceSector.title}</Text>
            <View style={styles.optionsContainer}>
                {str.card.announceSector.btns.map((btn, i) => {
                    const getPicture = [BuildingImg, PeopleImg];

                    const handlePress = () => {
                        nav('AdsFiltered', {target: i > 0 ? "resident" : "condominium"});
                    };

                    return (
                        <TouchableOpacity
                            onPress={handlePress}
                            key={'home-sector-' + i}
                            style={styles.option}>
                            <View style={styles.button}>
                                <Image
                                    source={getPicture[i]}
                                    style={styles.img}
                                />
                            </View>
                            <Text
                                style={styles.imageLabel}
                                allowFontScaling={false}>
                                {btn}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Theme.background[6],
        padding: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 18,
        color: Theme.text[1],
        textAlign: 'center',
        marginBottom: 20,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    option: {
        alignItems: 'center',
    },
    button: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: Theme.text[1],
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.background[1],
        padding: 10,
    },
    img: {
        width: 60,
        height: 60,
        tintColor: Theme.text[1],
        resizeMode: 'contain',
    },
    imageLabel: {
        textAlign: 'center',
        color: Theme.text[1],
        fontSize: 16,
        marginTop: 8,
    },
});

export {PublicSector};
