import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { Colors } from "@/src/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Equipos",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "shield-sharp" : "shield-outline"}
              size={24}
              color={
                focused
                  ? Colors.icon.tabIconSelected
                  : Colors.icon.tabIconDefault
              }
            />
          ),
          tabBarActiveTintColor: Colors.icon.tabIconSelected,
          tabBarInactiveTintColor: Colors.icon.tabIconDefault,
        }}
      />
      <Tabs.Screen
        name="player"
        options={{
          title: "Jugadores",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={focused ? "user-alt" : "user"}
              size={24}
              color={
                focused
                  ? Colors.icon.tabIconSelected
                  : Colors.icon.tabIconDefault
              }
            />
          ),
          tabBarActiveTintColor: Colors.icon.tabIconSelected,
          tabBarInactiveTintColor: Colors.icon.tabIconDefault,
        }}
      />
      <Tabs.Screen
        name="field"
        options={{
          title: "Canchas",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "soccer-field" : "soccer-field"}
              size={28}
              color={
                focused
                  ? Colors.icon.tabIconSelected
                  : Colors.icon.tabIconDefault
              }
            />
          ),
          tabBarActiveTintColor: Colors.icon.tabIconSelected,
          tabBarInactiveTintColor: Colors.icon.tabIconDefault,
        }}
      />
    </Tabs>
  );
}
