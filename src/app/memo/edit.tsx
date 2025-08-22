import { JSX, useEffect, useState } from 'react';
import {
    View, TextInput, StyleSheet, KeyboardAvoidingView,
    Alert
} from 'react-native';
import CircleButton from '../../components/CircleButton';
import Icon from '../../components/Icon';
import { router, useLocalSearchParams } from 'expo-router';
import { doc, setDoc, Timestamp, getDoc } from 'firebase/firestore';
import { auth, db } from '../../config';

const handlePress = (id: string, bodyText: string): void => {
    if (auth.currentUser === null) { return };
    const ref = doc(db, `users/${ auth.currentUser.uid }/memos/`, id);
    setDoc(ref, {
        bodyText,
        updatedAt: Timestamp.fromDate(new Date()),
    }
    )
        .then(() => {
            router.back()
        })
        .catch((error) => {
            Alert.alert('更新に失敗しました。')
        });
}

const Edit = (): JSX.Element => {
    const id = String(useLocalSearchParams().id);
    console.log(id);

    const [bodyText, setBodyText] = useState('');
    useEffect(() => {
        if (auth.currentUser === null) { return };
        const ref = doc(db, `users/${ auth.currentUser.uid }/memos/`, id);
        getDoc(ref)
            .then((docRef) => {
                const remoteBodyText = docRef?.data()?.bodyText;
                setBodyText(remoteBodyText);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    multiline
                    style={styles.input}
                    value={bodyText}
                    onChangeText={(text) => { setBodyText(text) }}

                ></TextInput>
            </View>
            <CircleButton onPress={() => handlePress(id, bodyText)}>
                <Icon name='check' size={40} color='#fff' />
            </CircleButton>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flex: 1,
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
});

export default Edit;