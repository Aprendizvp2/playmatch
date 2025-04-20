import { useState } from "react";
import { StyleSheet, SafeAreaView, Image, FlatList } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { Link } from "expo-router";
import { Colors } from "@/src/constants/Colors";
import {
  CustomCardPlayer,
  CustomNothingFound,
  CustomTextInput,
} from "@/src/components";

interface Props {
  id: number;
  name: string;
  position: string;
  image: string;
}

const playersData: Props[] = [
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

export const PlayersScreen = () => {
  const [search, setSearch] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState(playersData);

  const handleSearchPlayers = (text: string) => {
    setSearch(text);
    const filtered = playersData.filter((player) =>
      player.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPlayers(filtered);
  };

  const renderItem = ({ item }: { item: Props }) => (
    <CustomCardPlayer
      name={item.name}
      position={item.position}
      image={item.image}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text color={Colors.main.white} text50>
          Jugadores
        </Text>
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
      <Text color={Colors.main.white} text70>
        Encuentra jugadores para completar tu equipo
      </Text>
      <CustomTextInput
        placeholder="Buscar jugadores"
        value={search}
        onChangeText={handleSearchPlayers}
      />
      <View style={styles.cardContainer}>
        {filteredPlayers.length === 0 ? (
          <CustomNothingFound message="No se encontraron jugadores" />
        ) : (
          <FlatList
            data={filteredPlayers}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        )}
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
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 300,
  },
  cardContainer: {
    width: "100%",
  },
});
