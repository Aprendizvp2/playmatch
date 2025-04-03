import { Colors } from "@/constants/Colors";
import { PlayersScreen } from "@/screens/tabs/PlayersScreen/PlayersScreen";
import { View, StyleSheet } from "react-native";

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
