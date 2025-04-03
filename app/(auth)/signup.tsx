import { Colors } from "@/constants/Colors";
import { SignUpScreen } from "@/screens/auth/SignUpScreen";
import { View, StyleSheet } from "react-native";

export default function SignUpRoute() {
  return (
    <View style={styles.container}>
      <SignUpScreen />
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
