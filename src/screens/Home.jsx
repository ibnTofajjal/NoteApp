import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ navigation, route, user }) => {
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
