import { JSX } from "react";
import { View, StyleSheet } from "react-native";

import Header from "../components/Header";
import MemoListItem from "../components/MemoListItem";
import CircleButton from "../components/CircleButton";

// メイン画面のコンポーネント
const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* ヘッダー部分。アプリのタイトルやナビゲーションを表示 */}
      <Header />
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
      <CircleButton>+</CircleButton>
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

export default Index;