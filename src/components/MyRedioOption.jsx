import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const MyRedioOption = ({ label, value, setValue, size = "small" }) => {
  const isSelected = value === label;
  return (
    <TouchableOpacity onPress={() => setValue(label)}>
      <View style={styles.container}>
        <View
          style={[
            styles.outerCircle,
            isSelected && styles.selectedOuterCircle,
            size === "big" && styles.bigOuterCircle,
          ]}
        ></View>
        <View
          style={[
            styles.innerCircle,
            isSelected && styles.selectedInnerCircle,
            size === "big" && styles.bigInnerCircle,
          ]}
        ></View>
        <Text style={{ marginLeft: 10, fontWeight: "bold" }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyRedioOption;

const styles = StyleSheet.create({
  container: {
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
  selectedOuterCircle: {
    borderColor: "#256D85",
  },
  bigOuterCircle: {},
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 10,
    borderColor: "#cfcfcf",
    borderWidth: 1,
  },
  selectedInnerCircle: {
    backgroundColor: "#256D85",
    borderColor: "#256D85",
  },
  bigInnerCircle: {},
});
