import React, {useState, useEffect, useContext} from 'react';
import {Global} from '../../context';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import str from '../../localized';
import {TextForm} from '../Input';
import {SendBtn} from '../Button';
import {contactForm} from '../../tools';
import {submitMessage} from '../../service/action/messages';
import {createCache, checkCache} from '../../tools';
import Theme from '../../theme';

const {width} = Dimensions.get('screen');

function ContactForm() {
    const {setLoader} = useContext(Global);
    const [submitedStatus, setSubmitedStatus] = useState(false);
    const [hasAlreadySentMessage, setHasAlreadySentMessage] = useState(false);
    const [forceReload, setForceReload] = useState(false);
    const [stateListener, setStateListener] = useState({
        name: '',
        surname: '',
        email: '',
        description: '',
    });

    useEffect(() => {
        async function hasSendedAlready() {
            const hasCached = await checkCache('messageSent');

            if (hasCached) {
                setHasAlreadySentMessage(true);
            }
        }

        const canBeSubmited = contactForm(stateListener);
        setSubmitedStatus(canBeSubmited);

        hasSendedAlready();
    }, [stateListener, forceReload]);

    const handleSubmit = async () => {
        setLoader(true);
        const saveMessageOnDb = await submitMessage(stateListener);
        if (saveMessageOnDb) {
            await createCache('messageSent', true);
            setStateListener({
                name: '',
                surname: '',
                email: '',
                description: '',
            });
            setForceReload(p => !p);
            setLoader(false);
        }
    };

    return hasAlreadySentMessage ? (
        <Text style={styles.msgSent}>{str.weHaveRecived}</Text>
    ) : (
        <View style={styles.container}>
            {str.form.contact.map((field, i) => (
                <TextForm
                    key={'contactForm-' + i}
                    info={field}
                    setter={setStateListener}
                />
            ))}
            <SendBtn action={handleSubmit} canBenPressed={submitedStatus} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
    },
    title: {
        fontSize: 18,
        color: '#001f3f',
        textAlign: 'left',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginBottom: 12,
        backgroundColor: '#f9f9f9',
    },
    dropdownContainer: {
        borderColor: '#ddd',
        backgroundColor: '#fff',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#0C313A',
        borderRadius: 8,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 10,
        alignSelf: 'center',
        width: width * 0.5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    msgSent: {
        backgroundColor: Theme.background[3],
        color: Theme.text[2],
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        width: width * 0.8,
        borderRadius: 8,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 60,
    },
});

export {ContactForm};
