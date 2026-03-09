import { Tabs } from 'expo-router';

export default function Tablayout() {
  return (
    <Tabs
  screenOptions={{
    tabBarActiveTintColor: '#ffd33d',
    headerStyle: {
      backgroundColor: '#25292e',
    },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
      backgroundColor: '#25292e',
    },
  }}
>
      <Tabs.Screen
        name="index"
        options={{
          title: "Cats"
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "More Cats"
        }}
      />
    </Tabs>
  );
}