import { Tabs } from "expo-router";
import { Colors } from "../constants/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Tablayout() {
  return (

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.secondary,
          tabBarInactiveTintColor: Colors.purple,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.primary,
            borderTopWidth: 0,
          },
        }}
      >
        <Tabs.Screen
          name="(game)"
          options={{
            title: "Game",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "lightbulb-on" : "lightbulb-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="score"
          options={{
            title: "Highscore",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "crown" : "crown-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
  );
}
