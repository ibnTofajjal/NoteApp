import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyInput from "../components/MyInput";
import MyRedioOption from "../components/MyRedioOption";
import MyButton from "../components/MyButton";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { showMessage } from "react-native-flash-message";

const noteColorOption = ["red", "blue", "green"];
const Edit = ({ navigation, route, user }) => {
  const noteItem = route.params.item;
  console.log("noteItem", noteItem);
  const [title, setTitle] = useState(noteItem.title);
  const [description, setDescription] = useState(noteItem.description);
  const [noteColor, setNoteColor] = useState(noteItem.color);
  const [loading, setLoading] = useState(false);

  // Handler
  const editHandler = async () => {
    setLoading(true);
    try {
      await updateDoc(doc(db, "notes", noteItem.id), {
        title: title,
        description: description,
        color: noteColor,
      });
      setLoading(false);
      showMessage({
        message: "Note Added",
        type: "success",
      });
      navigation.goBack();
    } catch (error) {
      console.log("Error---------->", error);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ marginHorizontal: 20, flex: 1, marginTop: 50 }}>
      <MyInput
        placeholder={"Title"}
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <MyInput
        placeholder={"Description"}
        onChangeText={(text) => setDescription(text)}
        multiline={true}
        value={description}
      />

      <Text
        style={{
          marginHorizontal: 20,
          marginTop: 40,
          fontSize: 17,
          fontWeight: "bold",
        }}
      >
        Set Your Color Theme
      </Text>
      {noteColorOption.map((option, index) => {
        const selected = option === noteColor;
        return (
          <Pressable
            onPress={() => setNoteColor(option)}
            key={option}
            style={styles.radionContainer}
          >
            <View
              style={[
                styles.outerCircle,
                selected && styles.selectedOuterCircle,
              ]}
            >
              <View
                style={[
                  styles.innerCircle,
                  selected && styles.selectedInnerCircle,
                ]}
              ></View>
            </View>
            <Text style={styles.radioText}> {option}</Text>
          </Pressable>
        );
      })}

      {loading ? (
        <ActivityIndicator />
      ) : (
        <MyButton
          title={"Add To Note"}
          customStyle={{
            alignSelf: "center",
            marginTop: 50,
            marginBottom: 20,
            width: "100%",
          }}
          onPress={editHandler}
        />
      )}
    </SafeAreaView>
  );
};

export default Edit;

const styles = StyleSheet.create({
  radionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  outerCircle: {
    height: 20,
    width: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#cfcfcf",
    marginTop: 20,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 10,
    borderColor: "#cfcfcf",
    borderWidth: 1,
    // marginLeft: 10,
  },

  radioText: {
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 16,
  },
  selectedOuterCircle: {
    borderColor: "#256D85",
  },
  selectedInnerCircle: {
    backgroundColor: "#256D85",
    borderColor: "#256D85",
  },
});
