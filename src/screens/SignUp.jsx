import * as React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import {
  doc,
  setDoc,
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const genderOption = ["Male", "Female"];

const SignUp = ({ navigation }) => {
  const [gender, setGender] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");

  // H A N D L E R S
  const signupHandler = async () => {
    try {
      // 1. create user
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // 2. add user to firestore
      await addDoc(collection(db, "users"), {
        name,
        age,
        email,
        gender,
        uid: result.user.uid,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }

    // 3. navigate to home
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require("../../assets/images/singUp.png")}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <Text style={styles.imgTitle}>Registration Now</Text>

      {/* Inputs and Buttons --------------------------------- */}
      <View>
        <MyInput
          placeholder={"Email Address"}
          onChangeText={(text) => setEmail(text)}
        />
        <MyInput
          placeholder={"Password"}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <MyInput
          placeholder={"Full Name"}
          onChangeText={(text) => setName(text)}
        />
        <MyInput placeholder={"Age"} onChangeText={(text) => setAge(text)} />
      </View>

      {genderOption.map((option) => {
        const selected = option === gender;
        return (
          <Pressable
            onPress={() => setGender(option)}
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
      {/* RADIO BUTTON */}

      {/* DONT HAVE AN ACCOUNT? SING-UP */}
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <MyButton
          title={"Sign Up"}
          customStyle={{
            alignSelf: "center",
            marginTop: 50,
            marginBottom: 20,
          }}
          onPress={signupHandler}
        />
        <Pressable
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          <Text>
            Already have an account? {""}
            <Text
              style={{
                color: "#256D85",
                fontWeight: "bold",
              }}
            >
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
    width: 200,
    height: 200,
    alignSelf: "center",
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
