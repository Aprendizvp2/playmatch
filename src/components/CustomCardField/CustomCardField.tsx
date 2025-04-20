import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { Text } from "react-native-ui-lib";
import { Colors } from "@/src/constants/Colors";

interface Props {
  name: string;
  price: string;
  image: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export const CustomCardField = ({
  name,
  price,
  image,
  onPress,
  style,
}: Props) => {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.cardInfo}>
        <Image source={{ uri: image }} style={styles.imgField} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text
          style={styles.cardPosition}
          ellipsizeMode="clip"
          numberOfLines={2}
        >
          {price}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Contactar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    width: "100%",
    marginVertical: 4,
    borderRadius: 12,
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 12,
    backgroundColor: Colors.main.white,
  },
  cardInfo: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  imgField: {
    width: 330,
    height: 160,
    borderRadius: 16,
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
    fontSize: 16,
    color: Colors.main.black,
    width: 200,
  },
  button: {
    padding: 16,
    alignSelf: "flex-end",
    borderRadius: 100,
    backgroundColor: Colors.buttons.secondary,
  },
  buttonText: {
    color: Colors.main.white,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
