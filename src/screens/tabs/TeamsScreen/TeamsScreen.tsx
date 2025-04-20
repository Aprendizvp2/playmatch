import { StyleSheet, SafeAreaView, Image, View, FlatList } from "react-native";
import { Text } from "react-native-ui-lib";
import { Link } from "expo-router";
import { useState } from "react";
import { Colors } from "@/src/constants/Colors";
import {
  CustomCardTeam,
  CustomNothingFound,
  CustomTextInput,
} from "@/src/components";

interface Props {
  id: number;
  name: string;
  image: string;
}

const teamsData = [
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

export const TeamsScreen = () => {
  const [search, setSearch] = useState("");
  const [filteredTeams, setFilteredPlayers] = useState(teamsData);

  const handleSearchPlayers = (text: string) => {
    setSearch(text);
    const filtered = teamsData.filter((team) =>
      team.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPlayers(filtered);
  };

  const renderItem = ({ item }: { item: Props }) => (
    <CustomCardTeam
      name={item.name}
      image={item.image}
      onPress={() => console.log("Contactar a", item.name)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text color={Colors.main.white} text50>
          Equipos
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
        Busca tu próximo rival
      </Text>
      <CustomTextInput
        placeholder="Buscar equipos"
        value={search}
        onChangeText={handleSearchPlayers}
      />
      <View style={styles.cardContainer}>
        {filteredTeams.length === 0 ? (
          <CustomNothingFound message="No se encontraron equipos" />
        ) : (
          <FlatList
            data={filteredTeams}
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
