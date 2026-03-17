import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-web'
import { useState } from 'react'

export default function FormSignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
   const [avatar, setAvatar] = useState("")


  const handleSubmit = async() => {
    console.log({name, email, pass, avatar})
    const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email, pass, avatar})
    })
    if(response.ok){
        console.log("Usuario cadastrado com sucesso!")
        const data = await response.json()
        console.log(data)
    } else {
        console.log("erro ao cadastrar o usuario")
  }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.form}>
        <TextInput 
            style={styles.inputs} 
            placeholder="Name"
            value={name}
            onChangeText={setName}
        />
        <TextInput 
            style={styles.inputs} 
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput 
            style={styles.inputs} 
            placeholder="Senha" 
            secureTextEntry
            value={pass}
            onChangeText={setPass}
        />

        <TextInput 
            style={styles.inputs} 
            placeholder="Avatar" 
            value={avatar}
            onChangeText={setAvatar}
        />
        <Button title="Cadastrar" onPress={handleSubmit} color="#a7a4acff"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center'
  },
  form:{
    width: "80%",
    gap: 10
  },
  inputs:{
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderStyle: "solid",
    borderRadius: 6,
    padding: 8
  },
    title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20
  }
})