import { Tabs } from 'expo-router';
import { Colors } from '../constants/colors';

export default function Tablayout() {
  return (
    <Tabs
  screenOptions={{
    tabBarActiveTintColor: Colors.secondary,
    tabBarInactiveTintColor: Colors.purple,
    headerShown: false,
    headerTintColor: Colors.light,
    tabBarStyle: {
      backgroundColor: Colors.primary,
      borderTopWidth: 0,
    },
  }}
>
      <Tabs.Screen
        name="index"
        options={{
          title: "Play Mode"
        }}
      />
      <Tabs.Screen
        name="game"
        options={{
          title: "Game",
          href: null,
        }}
      />
      <Tabs.Screen
        name="mode"
        options={{
          title: "Mode"
        }}
      />
       <Tabs.Screen
        name="score"
        options={{
          title: "Score"
        }}
      />
    </Tabs>
  );
}