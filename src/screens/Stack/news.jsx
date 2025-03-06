import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";
import {Global} from '../../context';
import Theme from "../../theme";
import str from "../../localized";
import { MenuBtn } from "../../components/Button";
import { SideMenu } from "../../components/Modal";
import { NewCard } from "../../components/Card";

import { getAllNews } from "../../service/action/news";
import {AdCard} from '../../components/Card/ads';

function News({ navigation: { navigate } }) {
    const { menu, setLoader, loader } = useContext(Global);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function Jobs() {
            setLoader(true);

            const getNews = await getAllNews();

            setData(getNews);
            setLoader(false);
        }

        Jobs();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <SideMenu nav={navigate} />
            {!menu && <MenuBtn />}
            <ScrollView style={styles.content}>
                <View style={styles.contentHeader}>
                    <Text style={styles.headerTitle}>
                        {str.seeNewsFromRegion}
                    </Text>
                    <Text style={styles.headerSubtitle}>
                        {str.appNewsTitle}
                    </Text>
                </View>
                {
                    data.length !== 0 ? (
                        data.map(item => <NewCard key={item.id} data={item} nav={navigate} />)
                    ) : !loader && <Text style={styles.noNews}>{str.notNews}</Text>
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
    contentHeader: {
        marginTop: 75,
        marginBottom: 10,
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: Theme.text[2],
        textAlign: "center",
    },
    headerSubtitle: {
        fontSize: 16,
        fontWeight: "700",
        color: Theme.text[2],
        alignSelf: "flex-end",
        padding: 10,
    },
    noNews: {
        fontSize: 16,
        textAlign: "center",
        color: Theme.text[2],
        marginTop: 80
    },
});

export default News;
