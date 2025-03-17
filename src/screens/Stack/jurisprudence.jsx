import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import { Global } from '../../context';
import Theme from '../../theme';
import str from '../../localized';
import { SideMenu } from '../../components/Modal';
import { MenuBtn } from '../../components/Button';
import { JurisprudenceCard } from '../../components/Card';
import { getAllLaw } from '../../service/action/laws';
import { getAllAnnounces } from '../../service/action/announces';
import { Dimensions } from 'react-native';


const { width } = Dimensions.get('window');
function Jurisprudence({ navigation: { navigate } }) {
    const { setLoader, loader, menu } = useContext(Global);
    const [data, setData] = useState([]);
    const [pfjImage, setPfjImage] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setLoader(true);

            const getLaws = await getAllLaw();
            setData(getLaws);

            const ads = await getAllAnnounces();
            const pfjAd = ads.data.find(ad => ad.title === "PFJ Advocacia");

            if (pfjAd) setPfjImage(str.website + pfjAd.image);

            setLoader(false);
        }

        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <SideMenu nav={navigate} />
            {!menu && <MenuBtn />}
            <ScrollView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title} allowFontScaling={false}>
                        {str.juriTitle}
                    </Text>
                    <Text style={styles.subtitle} allowFontScaling={false}>
                        {str.juriSubtitle}
                    </Text>
                </View>

                {pfjImage && (
                    <Image
                        source={{ uri: pfjImage }}
                        style={styles.adImage}
                        resizeMode="cover"
                    />
                )}

                {data.length !== 0
                    ? data.map(item => (
                          <JurisprudenceCard key={item.id} data={item} nav={navigate} />
                      ))
                    : !loader && (
                          <Text style={[styles.subtitle, { marginTop: 80 }]}>
                              {str.noLaws}
                          </Text>
                      )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.background[4],
        flex: 1,
        alignItems: 'center',
    },
    content: {
        width: '100%',
    },
    header: {
        marginTop: 75,
        marginBottom: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        color: Theme.text[2],
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: Theme.text[2],
        fontWeight: '500',
        textAlign: 'center',
    },
    adImage: {
        width: width * 0.9, 
        height: (width * 0.9) * 0.5,
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 15,
    },
});

export default Jurisprudence;
