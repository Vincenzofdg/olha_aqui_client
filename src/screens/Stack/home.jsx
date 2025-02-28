import React, { useContext, useState, useEffect } from "react";
import { Global } from "../../context";
import {
    StyleSheet,
    SafeAreaView,
    BackHandler,
    ScrollView,
    Text,
    View,
} from "react-native";
import Theme from "../../theme";
import str from "../../localized";
import { MenuBtn } from "../../components/Button";
import { SideMenu } from "../../components/Modal";
import {
    PublicContact,
    PublicAnnounce,
    PublicSector,
} from "../../components/Card";
import { HomeList } from "../../components/Flatlist";
import { getHighlightedNews } from "../../service/action/news";

function Home({ navigation: { navigate } }) {
    const { setLoader, menu, admContacts } = useContext(Global);
    const [highlightedNews, setHighlightedNews] = useState([]);

    useEffect(() => {
        function RemoveBackHandler() {
            BackHandler.addEventListener("hardwareBackPress", () => true);
        }

        async function Jobs() {
            const getNews = await getHighlightedNews();
            setHighlightedNews(getNews);
            setLoader(false);
        }

        Jobs();
        RemoveBackHandler();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <SideMenu nav={navigate} />
            {!menu && <MenuBtn />}
            <ScrollView style={styles.content}>
                <PublicContact data={admContacts.phone} />
                <PublicAnnounce data={admContacts.website} />
                <PublicSector nav={navigate} />
                <View style={styles.newsHeader}>
                    <Text style={styles.newsTitle}>{str.homeNewTitle}</Text>
                    <Text style={styles.newsSubtitle}>
                        {str.homeNewSubtitle}
                    </Text>
                </View>
                {highlightedNews.length === 0 ? (
                    <></>
                ) : (
                    <HomeList data={highlightedNews} nav={navigate} />
                )}
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
        marginTop: 30,
        width: "100%",
    },
    newsHeader: {
        padding: 15,
        alignItems: "center",
    },
    newsTitle: {
        fontSize: 20,
        fontWeight: "800",
        color: Theme.text[2],
        marginBottom: 5,
    },
    newsSubtitle: {
        fontSize: 14,
        color: Theme.text[2],
        fontWeight: "500",
        textAlign: "center",
    },
});

export default Home;
