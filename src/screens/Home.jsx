import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const Home = ({ navigation, route, user }) => {
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    // create the query
    const q = query(collection(db, "notes"), where("uid", "==", user.uid));

    // create listener to listen the query that  we just created
    const notesListenerSubscription = onSnapshot(q, (querySnapshot) => {
      const notes = [];
      querySnapshot.forEach((doc) => {
        notes.push({ ...doc.data(), id: doc.id });
      });
      setNotes(notes);
    });

    return notesListenerSubscription;
  }, []);

  const renderItem = ({ item }) => {
    const { title, color, description } = item;
    return (
      <Pressable
        style={{
          height: 60,
          backgroundColor: color,
          marginBottom: 25,
          padding: 15,
          borderRadius: 15,
          color: "white",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 23,
          }}
        >
          {item.title}
        </Text>
      </Pressable>
    );
  };

  const createHandler = () => {
    navigation.navigate("Create");
  };
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text>My Notes</Text>
        <Pressable onPress={createHandler}>
          <AntDesign name="pluscircleo" size={24} color="black" />
        </Pressable>
      </View>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{ padding: 20 }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});
