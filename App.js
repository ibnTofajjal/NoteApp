import * as React from "react";
import "./src/firebase/config";
import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Signin from "./src/screens/Signin";
import SignUp from "./src/screens/SignUp";
import Edit from "./src/screens/Edit";
import Create from "./src/screens/Create";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./src/firebase/config";
import { StatusBar } from "expo-status-bar";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const authSubscription = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return authSubscription;
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {user ? (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                initialParams={{ user }}
              />
              <Stack.Screen
                name="Create"
                component={Create}
                initialParams={{ user }}
              />
              <Stack.Screen
                name="Edit"
                component={Edit}
                initialParams={{ user }}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="Signin" component={Signin} />
              <Stack.Screen name="Signup" component={SignUp} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
