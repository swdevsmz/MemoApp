import { JSX } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const LogOutButton = (): JSX.Element => {
    const handlePress = (): void => {
        // ログアウト処理をここに追加
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