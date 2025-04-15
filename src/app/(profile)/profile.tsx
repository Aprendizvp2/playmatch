import { View, StyleSheet } from "react-native";
import { ProfileScreen } from "@/src/screens/profile/ProfileScreen";
import { Colors } from "@/src/constants/Colors";

export default function ProfileRoute() {
  return (
    <View style={styles.container}>
      <ProfileScreen />
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
