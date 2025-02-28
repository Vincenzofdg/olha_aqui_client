import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";
import Theme from "../../theme";
import str from "../../localized";
import { MenuBtn } from "../../components/Button";
import { SideMenu } from "../../components/Modal";
import { NewCard } from "../../components/Card";

import { getAllNews } from "../../service/action/news";

function News({ navigation: { navigate } }) {
    const [news, setNews] = useState([]);
    const [localLoader, setLocalLoader] = useState(false);

    useEffect(() => {
        async function Jobs() {
            setLocalLoader(true);
            const getNews = await getAllNews();
            setNews(getNews);
            setLocalLoader(false);
        }

        Jobs();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <SideMenu nav={navigate} />
            <MenuBtn />
            <ScrollView style={styles.content}>
                <View style={styles.contentHeader}>
                    <Text style={styles.headerTitle}>
                        {str.seeNewsFromRegion}
                    </Text>
                    <Text style={styles.headerSubtitle}>
                        {str.appNewsTitle}
                    </Text>
                </View>
                {localLoader ? (
                    <></>
                ) : (
                    news.map(element => (
                        <NewCard
                            key={element.id}
                            data={element}
                            nav={navigate}
                        />
                    ))
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
});

export default News;
