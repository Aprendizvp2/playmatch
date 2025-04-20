import { View, Text, StyleSheet } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Colors } from "@/src/constants/Colors";

interface CustomNothingFoundProps {
  message: string;
}

export const CustomNothingFound = ({ message }: CustomNothingFoundProps) => {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={100} color={Colors.main.white} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: 24,
    marginVertical: 40,
    width: "100%",
  },
  text: {
    color: Colors.main.white,
    fontWeight: "bold",
    width: "80%",
    textAlign: "center",
    fontSize: 24,
  },
});
