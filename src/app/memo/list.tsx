import { JSX } from "react";
import { View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router, useNavigation } from "expo-router";
import LogOutButton from "../../components/LogOutButton";

import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db, auth } from '../../config';

import { type Memo } from '../../../types/memo';

const handlePress = (): void => {
  // 新規メモ作成画面へ遷移
  router.push('/memo/create');
}


// メイン画面のコンポーネント
const List = (): JSX.Element => {
  const [memos, setMemos] = useState<Memo[]>([]);

  const navigation = useNavigation();
  useEffect(() => {
    // 画面が表示されたときの処理
    // ここでは特に何もしないが、必要に応じてデータの取得などを行うことができる
    navigation.setOptions({
      headerRight: (): JSX.Element => { return <LogOutButton /> }
    });
  }, []);
  useEffect(() => {
    if (auth.currentUser === null) return;
    const ref = collection(db, `users/${ auth.currentUser.uid }/memos`);
    const q = query(ref, orderBy('updatedAt', 'desc'));
    // Firestoreのコレクションを監視し、データが更新されるたびに実行される
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const remoteMemos: Memo[] = [];
      snapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const { bodyText, updatedAt } = doc.data();
        remoteMemos.push({
          id: doc.id,
          bodyText,
          updatedAt,
        });
      });
      setMemos(remoteMemos);
    });
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      {/* メモリスト部分。複数のメモを一覧表示 */}
      <View>
        {memos.map((memo) => {
          return < MemoListItem memo={memo} />
        })}
      </View>
      {/* 画面右下のサークル型追加ボタン。新規メモ作成用 */}
      <CircleButton onPress={handlePress}><Icon name='plus' size={40} color='#ffffff' /></CircleButton>
    </View>
  );
};

// スタイル定義
const styles = StyleSheet.create({
  container: {
    flex: 1, // 画面全体に要素を広げる。縦方向に最大化。
    backgroundColor: "#ffffff", // 背景色を白に設定。清潔感のある印象。
    // 他のスタイル（余白や配置など）は必要に応じて追加可能。
  },
});

export default List;