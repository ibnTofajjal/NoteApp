import * as React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import { auth } from "../firebase/config";

const Signin = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const loginHandler = () => {
    console.log({ email, password });
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("signed in successfully", res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Image
          source={require("../../assets/images/Login.png")}
          style={styles.imageStyle}
          resizeMode="contain"
        />
        <Text style={styles.imgTitle}>Login Your Account</Text>

        {/* Inputs and Buttons --------------------------------- */}
        <View>
          <MyInput
            placeholder={"Email Address"}
            autoCapitalize={"none"}
            onChangeText={(text) => setEmail(text)}
          />
          <MyInput
            placeholder={"Password"}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        {/* DONT HAVE AN ACCOUNT? SING-UP */}

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {loading ? (
            <ActivityIndicator size="large" color="#256D85" />
          ) : (
            <MyButton
              title={"Login"}
              customStyle={{
                alignSelf: "center",
                marginTop: 50,
                marginBottom: 20,
              }}
              onPress={loginHandler}
            />
          )}
          <Pressable
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <Text>
              Don't have an account? {""}
              <Text style={{ color: "#256D85", fontWeight: "bold" }}>
                Sign Up
              </Text>
            </Text>
          </Pressable>
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
