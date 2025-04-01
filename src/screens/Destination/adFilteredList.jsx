import {StyleSheet, SafeAreaView, Dimensions, Text} from 'react-native';
import {GenericHeader} from '../../components/Header';
import {AdCard} from '../../components/Card/ads';
import React, {useContext, useEffect, useState} from 'react';
import {getAllAnnounces} from '../../service/action/announces';
import {Global} from '../../context';
import str from '../../localized';

const {height, width} = Dimensions.get('window');

function AdFilteredList({
    navigation: {navigate},
    route: {
        params: {target},
    },
}) {
    const {setLoader, loader} = useContext(Global);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchAds = async () => {
            setLoader(true);
            const adsData = await getAllAnnounces();
            const filterType = adsData.data.filter(
                item => item.target === target,
            );
            const bothSides = adsData.data.filter(
                item => item.target === "all",
            );
            setData([...filterType, ...bothSides]);
            setLoader(false);
        };

        fetchAds();

        return () => {
            data.length = 0;
            setData([]);
        };
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <GenericHeader nav={navigate} />
            {data.length !== 0
                ? data.map(item => (
                      <AdCard key={item.id} data={item} nav={navigate} />
                  ))
                : !loader && (
                      <Text style={[styles.subtitle, {marginTop: 80}]}>
                          {str.notAds}
                      </Text>
                  )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AdFilteredList;
