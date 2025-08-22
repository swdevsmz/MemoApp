import { JSX } from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

import { signOut } from 'firebase/auth';
import { auth } from '../config';
import { router } from 'expo-router';

const LogOutButton = (): JSX.Element => {

    const handlePress = (): void => {
        // ログアウト処理をここに追加
        signOut(auth)
            .then(() => {
                router.replace('/auth/log_in'); // ログアウト後にログイン画面へ遷移`
            })
            .catch(() => {
                console.error("ログアウトに失敗しました");
                Alert.alert("ログアウトに失敗しました");
            });

        console.log("Logged out");
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>ログアウト</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        lineHeight: 24,
        color: 'rgba(255, 255, 255, 0.7)',
    },
});

export default LogOutButton;