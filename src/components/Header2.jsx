import { View, Text, StyleSheet, Image} from 'react-native'

export default function Header() {
  return (
    <View style={styles.container}>

         <Image
        source={require('../../assets/logoLivraria.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Minha Loja</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1d492ff",
    width: "100%",
    height: 120,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingLeft: 20
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginRight: 10
  },

  title: {
    color: "#000000ff",
    fontSize: 20,
    fontWeight: "bold"
  }
})