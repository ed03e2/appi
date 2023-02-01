import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";


const Login = () => {

    const [user, setUser] = useState({
        user: "",
        pwd: "",
      });
    
      const handleChange = (name, value) => setUser({ ...user, [name]: value });
    
      const handleSubmit = () => {
        //console.log(user);
        axios.post('http://172.20.101.161:5000/alumnos/acceder', user)
        .then(function(response){
          setUser(user)
        })
        .catch(function(error){
          console.log(error);
        })
        .finally(function(){
          
        })
      };
    
  return (
    <View style={styles.container}>
    <Text style={styles.title}> UTD </Text>
    <Text style={styles.subTitle}> Iniciar sesion </Text>
    <TextInput
      placeholder="Usuario"
      style={styles.Input}
      value={user.user}
      onChangeText={(text) => handleChange("user", text)}
    />
    <TextInput
      placeholder="Contraseña"
      style={styles.Input}
      value={user.pwd}
      onChangeText={(text) => handleChange("pwd", text)}
      secureTextEntry={true}
    />

    <TouchableOpacity style={styles.boton} onPress={handleSubmit}>
      <Text style={{ fontSize: 20, marginTop: 10, color: "#000" }}>
        {" "}
        Iniciar{" "}
      </Text>
    </TouchableOpacity>

    <StatusBar style="auto" />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f1f1f1",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 80,
      fontWeight: "bold",
    },
    subTitle: {
      fontSize: 20,
      color: "gray",
    },
    Input: {
      backgroundColor: "#fff",
      padding: 10,
      width: "80%",
      marginTop: 20,
      borderRadius: 30,
      height: 50,
    },
    boton: {
      marginTop: 30,
      backgroundColor: "gray",
      borderRadius: 20,
      height: 50,
      width: 100,
      alignItems: "center",
    },
  });
  

export default Login