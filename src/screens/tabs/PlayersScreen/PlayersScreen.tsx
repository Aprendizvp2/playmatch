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
  position: string;
  image: string;
}

export const PlayersScreen = () => {
  const players = [
    {
      id: 1,
      name: "Juan David",
      position: "Delantero",
      image:
        "https://www.cardboardboxes.co.uk/wp-content/uploads/2023/05/Haaland.png",
    },
    {
      id: 2,
      name: "Andrés",
      position: "Defensa central",
      image:
        "https://static0.givemesportimages.com/wordpress/wp-content/uploads/2023/02/messi-3.png",
    },
    {
      id: 3,
      name: "Bradley",
      position: "Arquero",
      image:
        "https://preview.redd.it/missing-fifa-cards-end-of-an-era-cristiano-ronaldo-5-star-v0-sita84thos8b1.png?width=1288&format=png&auto=webp&s=bdfba413d644bba57dc43f3fbb1f01da27983087",
    },
  ];

  const renderItem = ({ item }: { item: Props }) => (
    <View style={styles.card}>
      <View style={styles.cardInfo}>
        <Image
          source={{ uri: item.image }}
          style={styles.imgTeam}
          resizeMode="cover"
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text
            style={styles.cardPosition}
            ellipsizeMode="clip"
            numberOfLines={2}
          >
            {item.position}
          </Text>
        </View>
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
          <Text style={styles.title}>Jugadores</Text>
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
      <Text style={styles.subtitle}>
        Encuentra jugadores para completar tu equipo
      </Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.main.black}
        placeholder="Buscar jugadores"
      />
      <View style={styles.cardContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={players}
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
    width: 90,
    height: 100,
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
    justifyContent: "space-between",
    gap: 12,
    backgroundColor: Colors.main.white,
  },
  cardInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cardContent: {
    flexDirection: "column",
    gap: 4,
    height: "100%",
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
});
