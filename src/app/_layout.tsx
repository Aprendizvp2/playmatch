import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import { Splash } from "../components/splash";
import { AuthProvider } from "../context/AuthContext";
import { useColorScheme } from "../hooks/useColorScheme.web";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/src/store";

// // Evita que el splash screen de Expo se oculte automáticamente.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, [loaded]);

  if (!loaded || showSplash) {
    return <Splash />; // Renderiza tu pantalla personalizada
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <StatusBar barStyle="light-content" />
            <Stack>
              <Stack.Screen
                name="(auth)/index"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="(auth)/signup"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="(auth)/signin"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="(profile)/profile"
                options={{ headerShown: false }}
              />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
            <Toast />
          </ThemeProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}
