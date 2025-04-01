import {FlatList, Image, View, Dimensions} from 'react-native';
import str from '../../localized';

const {height, width} = Dimensions.get('window');

function JurisHighlightedList({data}) {
    const separator = size => <View style={{width: size}} />;

    const displayCard = (imagePath) => (
        <Image
            source={{ uri: str.website + imagePath }}
            style={{
                width: width * 0.9,
                height: height * 0.3,
                alignSelf: 'center',
                borderRadius: 10,
                marginBottom: 15,
            }}
            resizeMode="cover"
        />
    );

    return (
        <FlatList
            data={data}
            renderItem={({item}) => displayCard(item.image)}
            keyExtractor={({id}) => `juri-highlighted-${id}`}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => separator(10)}
            ListFooterComponent={() => separator(20)}
            ListHeaderComponent={() => separator(20)}
        />
    );
}

export {JurisHighlightedList};
