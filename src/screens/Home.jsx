import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { signOut } from "firebase/auth";

const Home = ({ navigation, route }) => {
  const user = route?.params?.user;
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

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
      setLoading(false);
    });

    return notesListenerSubscription;
  }, []);

  const renderItem = ({ item }) => {
    const { title, color, description } = item;
    console.log("item", item);
    return (
      <Pressable
        style={{
          // height: 60,
          backgroundColor: color,
          marginBottom: 25,
          padding: 15,
          borderRadius: 15,
          color: "white",
        }}
        onPress={() => {
          navigation.navigate("Edit", { item });
        }}
      >
        <Pressable
          style={{
            position: "absolute",
            alignSelf: "flex-end",
            padding: 15,
            zIndex: 4,
          }}
          onPress={() => {
            deleteDoc(doc(db, "notes", item.id));
          }}
        >
          <AntDesign name="delete" size={24} color="white" />
        </Pressable>
        <Text
          style={{
            color: "white",
            fontSize: 23,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: "lightgray",
            fontSize: 14,
            marginTop: 10,
          }}
        >
          {description}
        </Text>
      </Pressable>
    );
  };

  const createHandler = () => {
    navigation.navigate("Create");
  };

  const logoutHandler = () => {
    signOut(auth);
  };

  if (loading) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>My Notes</Text>
        <Pressable onPress={createHandler}>
          <AntDesign name="plus" size={24} color="black" />
        </Pressable>
        <Pressable onPress={logoutHandler}>
          <AntDesign name="logout" size={24} color="black" />
        </Pressable>
      </View>

      {notes.length === 0 && (
        <Image
          source={require("../../assets/images/note.png")}
          style={styles.imageStyle}
          resizeMode="contain"
        />
      )}
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
  imageStyle: {
    width: 400,
    height: 400,
    alignSelf: "center",
    marginVertical: "30%",
  },
});
