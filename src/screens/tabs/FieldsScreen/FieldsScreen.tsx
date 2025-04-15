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
  price: string;
  image: string;
}

export const FieldsScreen = () => {
  const players = [
    {
      id: 1,
      name: "Cancha sintética Campo Verde",
      price: "$ 60.000 / 1 hora",
      image:
        "https://imer.gov.co/wp-content/uploads/2020/07/02-Cancha-de-futbol-Cabeceras.jpg",
    },
    {
      id: 2,
      name: "Polideportivo Calderón",
      price: "$ 80.000 / 1 hora",
      image:
        "https://www.comfenalcovalle.com.co/wp-content/uploads/2023/02/escenarios-deportivos-cali-1.webp",
    },
    {
      id: 3,
      name: "Bradley",
      price: "Arquero",
      image:
        "https://www.comfenalcovalle.com.co/wp-content/uploads/2023/02/escenarios-deportivos-cali-2.webp",
    },
  ];

  const renderItem = ({ item }: { item: Props }) => (
    <View style={styles.card}>
      <View style={styles.cardInfo}>
        <Image source={{ uri: item.image }} style={styles.imgTeam} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text
          style={styles.cardPosition}
          ellipsizeMode="clip"
          numberOfLines={2}
        >
          {item.price}
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Contactar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Canchas</Text>
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
      <Text style={styles.subtitle}>MIra los diferentes escenarios</Text>
      <TextInput
        style={styles.input}
        placeholder="Buscar canchas"
        placeholderTextColor={Colors.main.black}
      />
      <View style={styles.cardContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={players}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 270 }}
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
    height: "100%",
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
  img: {
    width: 50,
    height: 50,
    borderRadius: 300,
  },
  imgTeam: {
    width: 330,
    height: 160,
    borderRadius: 16,
  },
  cardContainer: {
    width: "100%",
  },
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
});
