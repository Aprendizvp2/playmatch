import { Colors } from "@/src/constants/Colors";
import { Link } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  FlatList,
} from "react-native";
import { Text } from "react-native-ui-lib";
import {
  CustomCardField,
  CustomNothingFound,
  CustomTextInput,
} from "@/src/components";

interface Props {
  id: number;
  name: string;
  price: string;
  image: string;
}

const fieldsData = [
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
    name: "Cancha sintética Campo Azul",
    price: "$ 100.000 / 1 hora",
    image:
      "https://www.comfenalcovalle.com.co/wp-content/uploads/2023/02/escenarios-deportivos-cali-2.webp",
  },
];

export const FieldsScreen = () => {
  const [search, setSearch] = useState("");
  const [filteredFields, setFilteredPlayers] = useState(fieldsData);

  const handleSearchPlayers = (text: string) => {
    setSearch(text);
    const filtered = fieldsData.filter((team) =>
      team.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPlayers(filtered);
  };

  const renderItem = ({ item }: { item: Props }) => (
    <CustomCardField name={item.name} price={item.price} image={item.image} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text color={Colors.main.white} text50>
          Canchas
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
        Mira los diferentes escenarios
      </Text>
      <CustomTextInput
        placeholder="Buscar canchas"
        value={search}
        onChangeText={handleSearchPlayers}
      />
      <View style={styles.cardContainer}>
        {filteredFields.length === 0 ? (
          <CustomNothingFound message="No se encontraron canchas" />
        ) : (
          <FlatList
            data={filteredFields}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 240 }}
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
    height: "100%",
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
