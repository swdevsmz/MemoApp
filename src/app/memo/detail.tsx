import { JSX, useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router, useLocalSearchParams } from "expo-router";

import { onSnapshot, doc } from "firebase/firestore";
import { auth, db } from '../../config';
import { type Memo } from '../../../types/memo';

const handlePress = (): void => {
    router.push('/memo/edit');
}

const Detail = (): JSX.Element => {
    const { id } = useLocalSearchParams();

    const [memo, setMemo] = useState<Memo | null>(null);
    useEffect(() => {
        if (auth.currentUser === null) { return };
        const ref = doc(db, `users/${ auth.currentUser.uid }/memos/`, String(id));
        const unsubscribe = onSnapshot(ref, (memoDoc) => {
            setMemo(memoDoc.data() as Memo);
        })
        return unsubscribe;
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text numberOfLines={1} style={styles.memoTitle}>{memo?.bodyText}</Text>
                <Text style={styles.memoDate}>{memo?.updatedAt?.toDate().toLocaleDateString('ja-JP')}</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    {memo?.bodyText}
                </Text>
            </ScrollView>
            <CircleButton onPress={handlePress} style={{ top: 60, bottom: 'auto' }}>
                <Icon name='pencil' size={40} color='#ffffff' />
            </CircleButton>
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
        paddingHorizontal: 27,
    },
    memoBodyText: {
        paddingVertical: 32,
        fontSize: 16,
        lineHeight: 24,
        color: "#000000", // メモ本文の文字色（黒）
    },
});

export default Detail;
