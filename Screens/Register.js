import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Register = () => {
  const [user, setUser] = useState({
    matricula: "",
    nombre: "",
    tipo: "",
    pwd: "",
  });

  const handleChange = (name, value) => setUser({ ...user, [name]: value });

  const handleSubmit = (e) => {
    console.log("aqui");
    e.preventDefault();
    const formData = new FormData();

    formData.append("matricula", user.matricula);
    formData.append("nombre", user.nombre);
    formData.append("tipo", user.tipo);
    formData.append("password", user.pwd);

    axios
      .post("http://172.20.101.161:5000/alumnos/agregar", formData)
      .then(function (response) {
        setUser({
          matricula: "",
          nombre: "",
          tipo: "",
          pwd: "",
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        //asdkja
      });
   };

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}> Registrate </Text>
      <TextInput
        placeholder="Matricula"
        style={styles.Input}
        user
        value={user.matricula}
        onChangeText={(text) => handleChange("matricula", text)}
      />
      <TextInput
        placeholder="Nombre"
        style={styles.Input}
        value={user.nombre}
        onChangeText={(text) => handleChange("nombre", text)}
      />
      <TextInput
        placeholder="Tipo"
        style={styles.Input}
        value={user.tipo}
        onChangeText={(text) => handleChange("tipo", text)}
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
          Registrarse{" "}
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
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
    width: 150,
    alignItems: "center",
  },
});

export default Register;