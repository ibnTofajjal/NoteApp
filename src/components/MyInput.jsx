import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const MyInput = ({ placeholder, secureTextEntry }) => {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.inputStyle}
    />
  );
};

export default MyInput;

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
