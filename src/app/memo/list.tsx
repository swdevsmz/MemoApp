import { JSX } from "react";
import { View, StyleSheet } from "react-native";

import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router } from "expo-router";

const handlePress = (): void => {
  // 新規メモ作成画面へ遷移
  router.push('/memo/create');
}


// メイン画面のコンポーネント
const List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* メモリスト部分。複数のメモを一覧表示 */}
      <View>
        {/* メモアイテムを複数表示。実際はデータから動的に生成する */}
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
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