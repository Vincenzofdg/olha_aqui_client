import { StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { WebView } from 'react-native-webview';
import { GenericHeader } from "../../components/Header";
import str from "../../localized"
import Theme from '../../theme';

import Pdf from 'react-native-pdf';

const {height, width} = Dimensions.get("window");

function Article({ navigation: { navigate }, route: { params } }) {
    const googleView = 'https://docs.google.com/gview?embedded=true&url=';
    const url = '/doc/article/dia-30-de-novembro-dia-do-sindico.pdf'

    return (
        <SafeAreaView style={styles.container}>
            <GenericHeader nav={navigate} />
            {/*<WebView*/}
            {/*    source={{ uri: str.docUrl + url }}*/}
            {/*    style={styles.pdf}*/}
            {/*    cacheEnabled={false}*/}
            {/*    scalesPageToFit={true}*/}
            {/*    onError={(syntheticEvent) => {*/}
            {/*        const { nativeEvent } = syntheticEvent;*/}
            {/*        console.warn('WebView error:', nativeEvent);*/}
            {/*    }}*/}
            {/*/>*/}





            {/*<Pdf*/}
            {/*    source={{ uri: 'https://olhaaquicondominios.com.br/doc/article/06032025-6u6qt4-140550.pdf', cache: true }}*/}
            {/*    style={styles.pdf}*/}
            {/*    // enablePaging={true}*/}
            {/*    // enableAnnotationRendering={true}*/}
            {/*    // enableAntialiasing={true}*/}
            {/*/>*/}

            <Pdf
                source={{ uri: 'https://olhaaquicondominios.com.br/doc/article/06032025-6u6qt4-140550.pdf', cache: true }}
                style={styles.pdf}
                onError={(error) => {
                    console.log('Erro ao carregar o PDF:', error);
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pdf: {
        backgroundColor: Theme.background[1],
        width,
        height,
    }
});

export default Article;
