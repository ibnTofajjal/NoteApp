import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import MyButton from "../components/MyButton";

const Signin = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Image
          source={require("../../assets/images/Login.png")}
          style={styles.imageStyle}
          resizeMode="contain"
        />
        <Text style={styles.imgTitle}>Login</Text>

        {/* Inputs and Buttons --------------------------------- */}
        <View>
          <TextInput style={styles.inputStyle} placeholder="Email Address" />
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            secureTextEntry
          />

          {/* DONT HAVE AN ACCOUNT? SING-UP */}

          <View
            style={{
              //   flex: 1,
              //   justifyContent: "flex-end",

              alignItems: "center",
            }}
          >
            <MyButton
              title={"Login"}
              customStyle={{ alignSelf: "center", marginTop: 50 }}
            />
            <Pressable
              onPress={() => {
                navigation.navigate("SingUp");
              }}
            >
              <Text>
                Don't have an account?
                <Text style={{ color: "#256D85", fontWeight: "bold" }}>
                  Sign Up
                </Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Signin;

const styles = StyleSheet.create({
  imageStyle: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  imgTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  //   inputStyle and Button style

  inputStyle: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
