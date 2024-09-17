import React, {useState} from 'react'
import { Text, View, StyleSheet, TouchableOpacity,Image } from "react-native";
import { TextInput } from 'react-native-web';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
    <Image
      style={styles.logo}
      source={require("../../assets/images/logo2.png")}
    />
    <View style={styles.formContainer}>
    <Text style={styles.subtitle}>Username</Text>
        <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
        placeholderTextColor="#666"
        />
        <Text style={styles.subtitle}>Password</Text>
        <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        placeholderTextColor="#666"
        secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
          >
            <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color='#666' />
            </TouchableOpacity>
        <TouchableOpacity style={styles.SignInbutton}>
            <Text
              style={styles.SignInbuttonText}
              onPress={() => navigation.navigate("Dashboard")}
            >
              Sign In
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ForgotPasswordbutton}>
            <Text
              style={styles.buttonText}
            >
              Forgot password?
            </Text>
        </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.SignUpbutton}>
            <Text
              style={styles.SignUpbuttonText}
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign Up
            </Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#000",
      justifyContent: 'flex-start',
      alignItems: "center",
      flex: 1,
    },
    logo: {
      width: 350,
      height: 300,
      resizeMode: "contain",
    },
    eyeIcon: {
      paddingHorizontal: 30,
      paddingVertical: 115,
      position: 'absolute',
      right: 0
    },
    formContainer:{
        width: '80%',
        backgroundColor: '#3C3C3C',
        padding: 20,
        marginTop: 10,
        borderRadius: 10,
    },
    subtitle: {
      color: "#fff",
      fontWeight: 'thin',
      fontFamily: 'Sans-serif',
      fontSize: 16,
      marginBottom: 8
    },
    input: {
        backgroundColor: '#fff',
        color: '#000',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 15,
    },
    SignInbutton: {
      backgroundColor: "#FF24BD",
      fontWeight: 'bold',
      marginBottom: 20,
      borderRadius: 7,
      marginTop: 20,
      padding: 10
    },
    SignInbuttonText: {
      color: "#000",
      textAlign: 'center'
    },
    buttonText: {
        color: "#fff",
        textAlign: 'left',
        textDecorationLine: 'underline',
        lineHeight: 10,
      },
    SignUpbuttonText: {
        color: "#fff",
        textAlign: 'center',
        marginTop: 90
      },
  });

