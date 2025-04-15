
import { PlayersScreen } from "@/src/screens/tabs/PlayersScreen/PlayersScreen";
import { View, StyleSheet } from "react-native";
import { Colors } from "@/src/constants/Colors";

export default function PlayerRoute() {
  return (
    <View style={styles.container}>
      <PlayersScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.main.primary,
  },
});
