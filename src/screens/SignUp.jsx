import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.imgTitle}>Registration Now</Text>

      {/* Inputs and Buttons --------------------------------- */}
      <View>
        <MyInput placeholder={"Email Address"} />
        <MyInput placeholder={"Password"} secureTextEntry />
        <MyInput placeholder={"Full Name"} />
        <MyInput placeholder={"Age"} />
      </View>
      {/* RADIO BUTTON */}
      <Pressable style={styles.radionContainer}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}></View>
        </View>
      </Pressable>

      {/* DONT HAVE AN ACCOUNT? SING-UP */}
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <MyButton
          title={"Login"}
          customStyle={{
            alignSelf: "center",
            marginTop: 50,
            marginBottom: 20,
          }}
        />
        <Pressable
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          <Text>
            Already have an account? {""}
            <Text style={{ color: "#256D85", fontWeight: "bold" }}>
              Sign in
            </Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 250,
    alignSelf: "center",
    marginTop: 50,
  },
  imgTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  radionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  outerCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#cfcfcf",
  },
});
