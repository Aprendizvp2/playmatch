import { Image, StyleSheet, Text } from "react-native";
import { View } from "react-native-ui-lib";
import { Colors } from "@/src/constants/Colors";
import { CustomButton } from "../CustomButton";

interface CustomCardPlayerProps {
  name: string;
  position: string;
  image: string;
  onPress?: () => void;
}

export const CustomCardPlayer = ({
  name,
  position,
  image,
  onPress,
}: CustomCardPlayerProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardInfo}>
        <Image
          source={{ uri: image }}
          style={styles.imgPlayer}
          resizeMode="cover"
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.cardPosition}>{position}</Text>
        </View>
      </View>
      <View>
        <CustomButton title="Ver perfil" onPress={onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    width: "100%",
    marginVertical: 4,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    backgroundColor: Colors.main.white,
  },
  cardInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  cardContent: {
    flexDirection: "column",
    gap: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.main.black,
  },
  cardPosition: {
    fontSize: 12,
    color: Colors.main.black,
    width: 100,
  },
  imgPlayer: {
    width: 90,
    height: 100,
  },
});
