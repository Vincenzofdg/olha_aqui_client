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
                        nav('AdsFiltered', {status: i > 0});
                    };

                    return (
                        <TouchableOpacity
                            onPress={handlePress}
                            key={'home-sector-' + i}>
                            <Image source={getPicture[i]} style={styles.img} />
                            <Text style={styles.imageLabel}>{btn}</Text>
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
    optionImage: {
        width: 100,
        height: 100,
    },
    optionText: {
        color: Theme.text[1],
        fontSize: 14,
        marginTop: 10,
    },
    img: {
        width: 80,
        height: 80,
        padding: 10,
        tintColor: Theme.text[1],
        objectFit: 'contain',
    },
    imageLabel: {
        textAlign: 'center',
        color: Theme.text[1],
        fontSize: 16,
        marginTop: 8,
    },
});

export {PublicSector};
