import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react';

import Checkbox from 'expo-checkbox';

const Login = ({ navigation }) => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const submit = () => {
    if (userName === "yash" && password !== "") {
      alert(`Thank You ${userName}!!`);
      navigation.navigate("Home", { myName: `${userName}` });
    } else {
      return alert("Please try again :(");
    }
  }

  return (
    <View style={styles.mainContainer}>

      <Text style={styles.mainHeader}>Login Form</Text>

      <Text style={styles.description}>You can reach us anytime via a@b.com</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Name</Text>
        <TextInput value={userName} onChangeText={(name) => setUserName(name)} style={styles.inputStyle} autoCorrect={false}></TextInput>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Password</Text>
        <TextInput value={password} onChangeText={(password) => setPassword(password)} style={styles.inputStyle} autoCapitalize='none' autoCorrect={false} secureTextEntry={true}></TextInput>
      </View>

      <View style={styles.wrapper}>
        <Checkbox value={agree} onValueChange={() => setAgree(!agree)} />
        <Text style={styles.wrapperText}>I have read and agreed with the TnC.</Text>
      </View>

      <Pressable onPress={() => submit()} style={[styles.buttonStyle, {backgroundColor: agree ? "#4630EB" : "grey"}]} disabled={!agree}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

    </View>
  )
}


const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: "#fff",
    },

    mainHeader: {
        fontSize: 24,
        fontWeight: "700",
        color: "#344055",
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: "capitalize",
    },

    description: {
        fontSize: 20,
        color: "#7d7d7d",
        paddingBottom: 20,
        lineHeight: 25,
    },

    inputContainer: {
        marginTop: 20,
    },

    labels: {
        fontSize: 18,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
    },

    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.3)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 1,
        fontSize: 18,
    }
});

export default Login;