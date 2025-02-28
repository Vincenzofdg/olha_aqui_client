import React, { useContext, useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, ScrollView, Text, View } from "react-native";
import { Global } from "../../context";
import Theme from "../../theme";
import str from "../../localized";
import { SideMenu } from "../../components/Modal";
import { MenuBtn } from "../../components/Button";
import { JurisprudenceCard } from "../../components/Card";
import { getAllLaw } from "../../service/action/laws";

function Jurisprudence({ navigation: { navigate } }) {
    const { setLoader } = useContext(Global);
    const [laws, setLaws] = useState([]);

    useEffect(() => {
        async function Jobs() {
            const getLaws = await getAllLaw();

            setLaws(getLaws);
            setLoader(false);
        }

        Jobs();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <SideMenu nav={navigate} />
            <MenuBtn />
            <ScrollView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>{str.juriTitle}</Text>
                    <Text style={styles.subtitle}>{str.juriSubtitle}</Text>
                </View>
                {laws.length === 0 ? (
                    <></>
                ) : (
                    laws.map(law => (
                        <JurisprudenceCard
                            key={law.id}
                            data={law}
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
        backgroundColor: Theme.background[4],
        flex: 1,
        alignItems: "center",
    },
    content: {
        width: "100%",
    },
    header: {
        marginTop: 75,
        marginBottom: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "800",
        color: Theme.text[2],
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: Theme.text[2],
        fontWeight: "500",
        textAlign: "center",
    },
});

export default Jurisprudence;
