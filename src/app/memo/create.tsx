import { JSX } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView
} from "react-native";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router } from "expo-router";

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db, auth } from "../../config";

import { useState } from "react";

const handlePress = async (bodyText: string): Promise<void> => {
    // 新規メモ作成後の処理（例: メモ一覧へ戻るなど）
    // async/awaitを使用するとコールバックのネストが減り、可読性が向上します。
    if (auth.currentUser === null) return;

    const ref = collection(db, `users/${ auth.currentUser.uid }/memos`);
    await addDoc(ref, {
        bodyText,
        updatedAt: Timestamp.fromDate(new Date()),
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

    router.back();
};

const Create = (): JSX.Element => {
    const [bodyText, setBodyText] = useState("");
    return (
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    multiline style={styles.input}
                    value={bodyText}
                    onChangeText={(text) => setBodyText(text)}
                    autoFocus={true}
                ></TextInput>
            </View>
            <CircleButton onPress={() => { handlePress(bodyText) }}>
                <Icon name="check" size={40} color="#fff" />
            </CircleButton>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1,
    },
    input: {
        flex: 1,
        textAlignVertical: "top",
        fontSize: 16,
        lineHeight: 24,
    },
});

export default Create;
