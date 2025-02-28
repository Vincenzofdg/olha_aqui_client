import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { MenuBtn } from "../../components/Button";
import { SideMenu } from "../../components/Modal";
import { ScrollView } from "react-native-gesture-handler";
import { getAllEvents } from "../../service/action/events";
import { EventCard } from "../../components/Card/event";
import str from "../../localized";
import Theme from "../../theme"; 

function BS({ navigation: { navigate } }) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const eventsData = await getAllEvents();
            setEvents(eventsData); 
        };

        fetchEvents(); 
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <SideMenu nav={navigate} />
            <MenuBtn />
            <ScrollView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>{str.eventsTitle}</Text>
                    <Text style={styles.subtitle}>{str.eventsSubtitle}</Text>
                </View>
                {events.length === 0 ? (
                    <Text style={styles.noEventsText}>{str.notEvents}</Text>
                ) : (
                    events.map((event) => (
                        <EventCard key={event.id} data={event} nav={navigate} />
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
    noEventsText: {
        textAlign: "center",
        color: "#888",
        marginTop: 20,
    },
    header: {
        padding: 10,
        marginTop: 75,
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
    },
});

export default BS;
