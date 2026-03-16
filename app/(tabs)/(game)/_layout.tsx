import { Stack } from 'expo-router';

export default function Gamelayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="start"  options={{ headerTitle: "Choose Category" }}/>
            <Stack.Screen name="game"  options={{ headerTitle: "Start Game" }}/>
            <Stack.Screen name="end"  options={{ headerTitle: "Game Ended" }}/>
        </Stack>
    )
}