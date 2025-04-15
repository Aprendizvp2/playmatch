import { Colors } from "@/src/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  View,
  TextInput,
  FlatList,
} from "react-native";

interface Props {
  id: number;
  name: string;
  image: string;
}

export const TeamsScreen = () => {
  const teams = [
    {
      id: 1,
      name: "La Junta Fc",
      image:
        "https://img.playbuzz.com/image/upload/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2.5/v1536163712/vlicwlpagkmii0suwzjg.png",
    },
    {
      id: 2,
      name: "Panteras Fc",
      image:
        "https://img.playbuzz.com/image/upload/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2.5/v1536163769/p1qwdp8bshbv8iiucnpx.png",
    },
    {
      id: 3,
      name: "Deportivo Alcázares",
      image:
        "https://img.playbuzz.com/image/upload/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2.5/v1536163705/scizclgpnfl7uwxka5ul.png",
    },
  ];

  const renderItem = ({ item }: { item: Props }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image }}
        style={styles.imgTeam}
        resizeMode="cover"
      />
      <View>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contactar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Equipos</Text>
        </View>
        <Link href="/(profile)/profile">
          <Image
            source={{
              uri: "https://media.cnn.com/api/v1/images/stellar/prod/221022113542-masato-kudo-2021-file.jpg?c=original",
            }}
            style={styles.img}
            resizeMode="cover"
          />
        </Link>
      </View>
      <Text style={styles.subtitle}>Busca tu próximo rival</Text>
      <TextInput
        style={styles.input}
        placeholder="Buscar equipos"
        placeholderTextColor={Colors.main.black}
      />
      <View style={styles.cardContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={teams}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 12,
  },
  content: {
    width: "100%",
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.main.white,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.main.white,
  },
  input: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    width: "100%",
    backgroundColor: Colors.main.white,
    color: Colors.main.primary,
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
  img: {
    width: 50,
    height: 50,
    borderRadius: 300,
  },
  imgTeam: {
    width: 80,
    height: "100%",
  },
  cardContainer: {
    width: "100%",
  },
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
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.main.black,
  },
});
