import { JSX } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "./Icon";
import { Link } from "expo-router";
import { type Memo } from "../../types/memo";


type Props = {
  memo: Memo,
}

// メモリストの1アイテムを表示するコンポーネント
const MemoListItem = (props: Props): JSX.Element | null => {
  const { memo } = props;
  const { bodyText, updatedAt } = memo;

  if (bodyText === null || updatedAt === null) { return null };

  const dateString = memo.updatedAt.toDate().toLocaleString('ja-JP')
  return (
    <Link
      href={{ pathname: '/memo/detail', params: { id: memo.id } }}
      asChild >
      <TouchableOpacity style={styles.memoListItem}>
        {/* メモのタイトルと日付を表示する部分 */}
        <View>
          <Text numberOfLines={1} style={styles.memoListItemTitle}>{bodyText}</Text>
          <Text style={styles.memoListItemDate}>{dateString}</Text>
        </View>
        {/* 削除ボタン（仮）部分。今は「X」表示 */}
        <TouchableOpacity>
          <Icon name='delete' size={32} color='#B0B0B0' />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link >
  );
}

// スタイル定義
const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: "#ffffff", // アイテムの背景色（白）。清潔感を演出。
    flexDirection: "row", // 横並びでタイトル・日付・削除ボタンを配置
    justifyContent: 'space-between', // 左右に要素を分散配置
    paddingVertical: 16, // 上下の余白。タップしやすい高さ。
    paddingHorizontal: 19, // 左右の余白。見やすさ向上。
    alignItems: "center", // 縦方向中央揃え
    borderBottomWidth: 1, // 下線で区切りを表現
    borderBottomColor: 'rgba(0, 0, 0, 0.15)', // 下線の色。薄いグレーで控えめな印象。
  },
  memoListItemTitle: {
    fontSize: 16, // タイトル文字サイズ。見やすさ重視。
    lineHeight: 32, // タイトル行の高さ。余白を持たせて読みやすく。
    color: "#000000", // タイトル文字色（黒）。視認性重視。
  },
  memoListItemDate: {
    fontSize: 12, // 日付文字サイズ。タイトルより小さめ。
    lineHeight: 16, // 日付行の高さ。
    color: "#848484", // 日付文字色。グレーで控えめな印象。
  },
});

export default MemoListItem;