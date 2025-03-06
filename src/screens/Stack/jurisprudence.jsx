import React, {useContext, useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Text, View} from 'react-native';
import {Global} from '../../context';
import Theme from '../../theme';
import str from '../../localized';
import {SideMenu} from '../../components/Modal';
import {MenuBtn} from '../../components/Button';
import {JurisprudenceCard} from '../../components/Card';
import {getAllLaw} from '../../service/action/laws';
import {AdCard} from '../../components/Card/ads';

function Jurisprudence({navigation: {navigate}}) {
    const {setLoader, loader, menu} = useContext(Global);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function Jobs() {
            setLoader(true);

            const getLaws = await getAllLaw();

            setData(getLaws);
            setLoader(false);
        }

        Jobs();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <SideMenu nav={navigate} />
            {!menu && <MenuBtn />}
            <ScrollView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>{str.juriTitle}</Text>
                    <Text style={styles.subtitle}>{str.juriSubtitle}</Text>
                </View>

                {data.length !== 0
                    ? data.map(item => (
                          <JurisprudenceCard
                              key={item.id}
                              data={item}
                              nav={navigate}
                          />
                      ))
                    : !loader && (
                          <Text style={[styles.subtitle, {marginTop: 80}]}>
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
});

export default Jurisprudence;
