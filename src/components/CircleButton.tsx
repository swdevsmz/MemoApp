import { JSX } from 'react';
import {
    Text, StyleSheet, TouchableOpacity,
    type ViewStyle
} from 'react-native';


type Props = {
    children: JSX.Element;
    style?: ViewStyle
}

// 画面右下に表示されるサークル型ボタンのコンポーネント
const CircleButton = (props: Props): JSX.Element => {
    const { children, style } = props;
    return (
        <TouchableOpacity style={[styles.circleButton, style]}>
            {/* ボタンラベル（例: + 記号など） */}
            <Text style={styles.circleButtonLabel}>{children}</Text>
        </TouchableOpacity>
    )
};

// スタイル定義
const styles = StyleSheet.create({
    circleButton: {
        width: 64, // ボタンの幅（円形なので高さと同じ）
        height: 64, // ボタンの高さ
        borderRadius: 32, // 円形にするため、幅/高さの半分
        backgroundColor: "#467fd3", // ボタンの背景色（青系）
        justifyContent: "center", // ラベルを中央に配置（縦方向）
        alignItems: "center", // ラベルを中央に配置（横方向）
        position: "absolute", // 画面右下に絶対位置で配置
        bottom: 40, // 下端から40pxの位置
        right: 40, // 右端から40pxの位置
        shadowColor: "#000000", // 影の色（黒）
        shadowOpacity: 0.25, // 影の透明度
        shadowRadius: 8, // 影のぼかし半径
        shadowOffset: {
            width: 0, // 影の横方向オフセット
            height: 8, // 影の縦方向オフセット
        },
        elevation: 8, // Android用の影（立体感）
    },
    circleButtonLabel: {
        color: "#ffffff", // ラベル文字色（白）
        fontSize: 40, // ラベル文字サイズ。大きく表示
        lineHeight: 40, // ラベル行の高さ
        fontWeight: "bold", // 太字で強調
    },
});

export default CircleButton;