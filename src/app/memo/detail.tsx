import { JSX } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router } from "expo-router";

const handlePress = (): void => {
    router.push('/memo/edit');
}

const Detail = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2025年8月1日 10:00</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    メモの内容ああああああああああああああ
                    いいいいいいいいいいいいいいいいいい
                    うううううううううううううううううう
                </Text>
            </ScrollView>
            <CircleButton onPress={handlePress} style={{ top: 160, bottom: 'auto' }}><Icon name='pencil' size={40} color='#ffffff' /></CircleButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // 画面いっぱいに要素を広げる
        backgroundColor: "#ffffff", // 背景色を白に設定
    },
    memoHeader: {
        backgroundColor: "#467fd3", // ヘッダーの背景色（白）
        height: 96,
        justifyContent: "center",
        paddingVertical: 24, // 上下の余白
        paddingHorizontal: 19, // 左右の余白
    },
    memoTitle: {
        color: "#ffffff",
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "bold",
    },
    memoDate: {
        color: "#ffffff",
        fontSize: 12,
        lineHeight: 16,
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: "#000000", // メモ本文の文字色（黒）
    },
});

export default Detail;
