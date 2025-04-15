
import { FieldsScreen } from "@/src/screens/tabs/FieldsScreen";
import { View, StyleSheet } from "react-native";
import { Colors } from "@/src/constants/Colors";

export default function FieldRoute() {
  return (
    <View style={styles.container}>
      <FieldsScreen />
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
