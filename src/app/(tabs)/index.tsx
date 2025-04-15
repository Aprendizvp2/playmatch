
import { TeamsScreen } from "@/src/screens/tabs/TeamsScreen";
import { View, StyleSheet } from "react-native";
import { Colors } from "@/src/constants/Colors";

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
