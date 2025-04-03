import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";

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
          title: "Teams",
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name={focused ? "shield" : "shield-halved"}
              size={24}
              color={focused ? "green" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="player"
        options={{
          title: "Players",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={focused ? "user-alt" : "user"}
              size={24}
              color={focused ? "green" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="field"
        options={{
          title: "Field",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "soccer-field" : "soccer-field"}
              size={28}
              color={focused ? "green" : "gray"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
