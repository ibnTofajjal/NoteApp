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

const SignUp = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Image
          source={require("../../assets/images/singUp.png")}
          style={styles.imageStyle}
          resizeMode="contain"
        />
        <Text style={styles.imgTitle}>Registration Now</Text>

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
                navigation.navigate("Signin");
              }}
            >
              <Text>
                Already have an account?
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
