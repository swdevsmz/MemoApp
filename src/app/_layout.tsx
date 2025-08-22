import { Stack } from 'expo-router';
import { JSX } from 'react';

const Layout = (): JSX.Element => {
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: '#467fd3',
            },
            headerTintColor: '#fff', // ヘッダーの文字色を白に設定
            headerTitle: 'Memo App', // ヘッダーのタイトルを設定
            headerBackTitle: 'Back', // 戻るボタンのタイトルを設定
            headerTitleStyle: {
                fontSize: 22, // ヘッダーのタイトルのフォントサイズを設定
                fontWeight: 'bold', // ヘッダーのタイトルのフォントウェイトを設定
            }

        }} />
    );
};

export default Layout;