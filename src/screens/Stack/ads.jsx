import React, {useState, useEffect, useContext} from 'react';
import { Global } from "../../context";
import { StyleSheet, SafeAreaView, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { getAllAnnounces } from "../../service/action/announces";
import { AdCard } from "../../components/Card/ads";
import Theme from "../../theme";
import str from "../../localized";
import {SideMenu} from '../../components/Modal';
import {MenuBtn} from '../../components/Button';
import {FilterAds} from '../../components/Modal';

function Ads({ navigation: { navigate } }) {
    const { setLoader, loader, menu } = useContext(Global);
    const [data, setData] = useState([]);
    const [tags, setTags] = useState([]);
    const [modalState, setModalState] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(undefined);

    useEffect(() => {
        const fetchAds = async () => {
            setLoader(true);
            let adsData;

            if (selectedFilter === undefined) {
                adsData = await getAllAnnounces();
            } else {
                const {data, tags} = await getAllAnnounces();
                const filteredData = data.filter(item => item.tag.includes(selectedFilter));
                adsData = {data: filteredData, tags: tags};
            }

            setData(adsData.data);
            setTags(adsData.tags);
            setLoader(false);
        };

        fetchAds();
    }, [selectedFilter]);

    return (
        <SafeAreaView style={styles.container}>
            <SideMenu nav={navigate} />
            <FilterAds list={tags} isOpen={modalState} closeModal={setModalState} setter={setSelectedFilter}/>
            {!menu && <MenuBtn />}
            <ScrollView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>{str.adsTitle}</Text>
                    <Text style={styles.subtitle}>{str.adsSubtitle}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => setModalState(p => !p)}>
                        <Text style={styles.buttonText}>{`#${!!selectedFilter ? selectedFilter : str.all}`}</Text>
                    </TouchableOpacity>
                </View>
                {
                    data.length !== 0 ? (
                        data.map(item => <AdCard key={item.id} data={item} nav={navigate} />)
                    ) : !loader && <Text style={[styles.subtitle, {marginTop: 80}]}>{str.notAds}</Text>
                }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    content: {
        width: "100%",
    },
    noAdsText: {
        textAlign: "center",
        color: "#888",
        marginTop: 20,
    },
    header: {
        padding: 10,
        marginTop: 80,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: Theme.text[2],
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        color: Theme.text[2],
        marginBottom: 10,
    },
    button: {
        backgroundColor: Theme.background[5],
        borderRadius: 8,
        padding: 10,
        alignSelf: "flex-start",
        marginTop: 15,
    },
    buttonText: {
        fontSize: 14,
        color: Theme.text[1],
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default Ads;
