import { Colors } from "@/constants/Colors";
import { TeamsScreen } from "@/screens/tabs/TeamsScreen";
import { View, StyleSheet } from "react-native";

export default function TeamsRoute() {
  return (
    <View style={styles.container}>
      <TeamsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.main.primary,
  }
});
