
import { Colors } from "@/src/constants/Colors";
import { SignInScreen } from "@/src/screens/auth/SignInScreen";
import { View, StyleSheet } from "react-native";

export default function LoginRoute() {
  return (
    <View style={styles.container}>
      <SignInScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.main.primary,
  },
});
