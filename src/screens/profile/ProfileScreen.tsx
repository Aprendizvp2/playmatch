import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
  ActivityIndicator,
} from "react-native";
import { Text, View } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/src/constants/Colors";
import { router } from "expo-router";
import { useGetProfileQuery } from "@/src/api/authApi";
import { useAuthActions } from "@/src/hooks/useActions";
import { CustomButton, CustomTextInput } from "@/src/components";

export const ProfileScreen = () => {
  const { data } = useGetProfileQuery({});
  const { signOut } = useAuthActions();

  if (!data) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ActivityIndicator size="large" color={Colors.main.white} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.keyboardAvoiding}
      >
        <View style={styles.infoContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.side}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text color={Colors.main.white} text60>
              Perfíl
            </Text>
            <View style={styles.side} />
          </View>
          <View style={styles.formContainer}>
            <Image
              source={{
                uri: "https://media.cnn.com/api/v1/images/stellar/prod/221022113542-masato-kudo-2021-file.jpg?c=original",
              }}
              style={styles.img}
              resizeMode="cover"
            />
            <CustomTextInput
              placeholder="Nombre"
              value={data?.name || ""}
              editable={false}
              placeholderTextColor={Colors.main.black}
            />
            <CustomTextInput
              placeholder="Correo"
              value={data?.email || ""}
              editable={false}
              placeholderTextColor={Colors.main.black}
            />
            <CustomTextInput
              placeholder="Contraseña"
              value="********"
              editable={false}
              secureTextEntry
              placeholderTextColor={Colors.main.black}
            />
          </View>
          <View gap-12>
            <CustomButton
              title="Actualizar"
              backgroundColor={Colors.main.white}
              textColor={Colors.main.black}
            />
            <CustomButton
              title="Cerrar sesión"
              backgroundColor={Colors.actions.error}
              textColor={Colors.main.white}
              onPress={signOut}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.main.primary,
  },
  keyboardAvoiding: {
    flex: 1,
  },
  infoContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
  },
  side: {
    width: 32,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 300,
  },
});
