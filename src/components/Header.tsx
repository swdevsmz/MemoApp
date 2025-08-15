import { JSX } from "react";
import { View, Text, StyleSheet } from "react-native";

// ヘッダーコンポーネント
const Header = ():JSX.Element => {
    return (
        <View style={styles.header}>
            {/* ヘッダー内側のレイアウト。タイトルと右側のボタンを配置 */}
            <View style={styles.headerInner}>
                {/* アプリタイトル表示部分 */}
                <Text style={styles.headerTitle}>Memo App</Text>
                {/* 右側のログアウトボタン。絶対位置で配置 */}
                <Text style={styles.headerRight}>ログアウト</Text>
            </View>
        </View>
    );
};

// スタイル定義
const styles = StyleSheet.create({
    header: {
        backgroundColor: "#467fd3", // ヘッダーの背景色（青系）
        height: 104, // ヘッダーの高さ。画面上部に固定される高さ。
        justifyContent: "flex-end", // 子要素を下側に寄せて配置
    },
    headerInner: {
        alignItems: "center", // 子要素（タイトル等）を中央揃え
        // 必要に応じてflexDirectionやpaddingを追加可能
    },
    headerRight: {
        position: "absolute", // 親要素内で絶対位置指定
        right: 16, // 右端から16pxの位置
        bottom: 16, // 下端から16pxの位置
        color: "rgba(255, 255, 255, 0.7)", // 半透明の白色文字。視認性とデザイン性を両立
    },
    headerTitle: {
        marginBottom: 8, // タイトル下に余白
        color: "#ffffff", // タイトル文字色（白）
        fontSize: 22, // タイトル文字サイズ
        lineHeight: 32, // タイトル行の高さ
        fontWeight: "bold", // 太字で強調
    },
});

export default Header;