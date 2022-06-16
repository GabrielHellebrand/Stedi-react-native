import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const sendText= async (phoneNumber) =>{
  console.log("PhoneNumber:",phoneNumber);
  await fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber, {
    method: "post",
    headers:{
      'content-type':'application/text'
    }
  });
}

  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);


  return (
    <SafeAreaView style={styles.margin}>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="555-123-4567"
        placeholderTextColor='#4251f5'
      />
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="1234"
        placeholderTextColor='#4251f5'
        keyboardType="numeric"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={()=>{
          sendText(phoneNumber);
        }}      
        >
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }, margin: {
    marginTop: 100
  }
},

);

export default Login;