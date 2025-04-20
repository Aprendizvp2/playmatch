import {
  Image,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from "react-native";
import { Text, View } from "react-native-ui-lib";
import { Colors } from "@/src/constants/Colors";
import { CustomButton } from "../CustomButton";

interface Props {
  name: string;
  image: string;
  onPress?: () => void;
  style?: ViewStyle;
  imageStyle?: ImageStyle;
  textStyle?: TextStyle;
}

export const CustomCardTeam = ({
  name,
  image,
  onPress,
  style,
  imageStyle,
  textStyle,
}: Props) => {
  return (
    <View style={[styles.card, style]}>
      <Image
        source={{ uri: image }}
        style={[styles.imgTeam, imageStyle]}
        resizeMode="cover"
      />
      <View gap-4>
        <Text style={[styles.cardTitle, textStyle]}>{name}</Text>
        <CustomButton title="Contactar" onPress={onPress} width={120} />
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
    gap: 12,
    backgroundColor: Colors.main.white,
  },
  imgTeam: {
    width: 80,
    height: "100%",
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.main.black,
  },
  button: {
    marginTop: 8,
    padding: 16,
    width: 104,
    borderRadius: 100,
    backgroundColor: Colors.buttons.secondary,
  },
  buttonText: {
    color: Colors.main.white,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
