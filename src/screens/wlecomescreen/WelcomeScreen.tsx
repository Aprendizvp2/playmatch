import { StyleSheet, Image } from "react-native";
import { View } from "react-native-ui-lib";
import { router } from "expo-router";
import { Colors } from "@/src/constants/Colors";
import { CustomButton } from "@/src/components";

export const WelcomeScreen = () => {
  return (
    <View flex-1 center backgroundColor={Colors.main.primary} gap-16>
      <Image
        source={require("../../assets/images/welcome-player.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <CustomButton
        title="Iniciar sesión"
        onPress={() => {
          router.push("/(auth)/signin");
        }}
        backgroundColor={Colors.buttons.primary}
        textColor={Colors.main.black}
      />
      <CustomButton
        title="Registrarse"
        onPress={() => {
          router.push("/(auth)/signup");
        }}
        backgroundColor={Colors.buttons.secondary}
        textColor={Colors.main.white}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 280,
    height: 280,
    marginVertical: 20,
  },
});
