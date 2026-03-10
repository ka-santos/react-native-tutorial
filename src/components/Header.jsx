import {View, Text, StyleSheet, Image} from 'react-native'

export default function Header() {
    return(
       <View style={styles.container}> 

       <Image 
       source={require('../../assets/Logo Poção Mágica Gato.png')}
       style={styles.logo}
       />

            <Text style={styles.logotipo}>LOGO</Text>
       </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dfdedeff",
    width: "100%",
    height: 100,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingLeft: 20
  },

  logo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginRight: 10
  },

  logotipo: {
    color: "#000000ff",
    fontSize: 18,
    fontWeight: "bold"
  }
})