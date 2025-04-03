import { Colors } from "@/constants/Colors";
import { FieldsScreen } from "@/screens/tabs/FieldsScreen";
import { Text, View, StyleSheet } from "react-native";

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
