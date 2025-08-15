import { JSX } from "react";
import { View, Text, StyleSheet } from "react-native";

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* ヘッダー */}
      <View>
        <View>
          <Text>Memo App</Text>
          <Text>ログアウト</Text>
        </View>
      </View>
      
      {/* メモリスト */}
      <View>
        <View>
          <Text>買い物リスト</Text>
          <Text>2025/8/1 10:00</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>

        <View>
          <Text>買い物リスト</Text>
          <Text>2025/8/1 10:00</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>

        <View>
          <Text>買い物リスト</Text>
          <Text>2025/8/1 10:00</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      {/* フッター */}
      <View>
        <Text>+</Text>
      </View>

    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});