import {StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import {GenericHeader} from '../../components/Header';
import Pdf from 'react-native-pdf';
import str from '../../localized';
import Theme from '../../theme';

const {height, width} = Dimensions.get('window');

function Article({navigation: {navigate}, route: {params}}) {
    return (
        <SafeAreaView style={styles.container}>
            <GenericHeader nav={navigate} />
            <Pdf
                source={{uri: str.website + params.content, cache: false}}
                style={styles.pdf}
                trustAllCerts={false}
                minScale={1.0}
                maxScale={3.0}
                scale={1}
                spacing={0}
                fitPolicy={2}
                onError={error => console.error(error)}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pdf: {
        backgroundColor: Theme.background[4],
        flex: 1,
        width,
        height,
    },
});

export default Article;
