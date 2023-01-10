import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const MyInput = ({
  placeholder,
  secureTextEntry,
  onChangeText,
  autoCapitalize,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.inputStyle}
      onChangeText={onChangeText}
      autoCapitalize={autoCapitalize}
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
