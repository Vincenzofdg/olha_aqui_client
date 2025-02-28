import { FlatList, View } from "react-native";
import { NewCard as Card } from "../Card";

function HomeList({ data, nav }) {
    const separator = size => <View style={{ width: size }} />;

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Card data={item} nav={nav} />}
            keyExtractor={({ id }) => `new-${id}`}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => separator(10)}
            ListFooterComponent={() => separator(20)}
            ListHeaderComponent={() => separator(20)}
        />
    );
}

export { HomeList };
