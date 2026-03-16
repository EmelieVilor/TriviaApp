import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
<Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="index"  options={{ headerTitle: "First Page"}}/>
    <Stack.Screen name="(tabs)"  options={{ headerTitle: "Start Game" }}/>
</Stack>
    );
}