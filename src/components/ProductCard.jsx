import { View, Text, StyleSheet, Image } from 'react-native'

export default function ProductCard({ imagem, nome, preco, genero }) {
  return (
    <View style={styles.card}>
      
      <Image source={imagem} style={styles.imagem} />

      <Text style={styles.nome}>{nome}</Text>

      <Text style={styles.preco}>R$ {preco}</Text>

      <View style={styles.tag}>
        <Text style={styles.tagText}>{genero}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: "48%",   // garante 2 cards por linha
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },

  imagem: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
    marginBottom: 10
  },

  nome: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },

  preco: {
    fontSize: 15,
    color: "green",
    marginVertical: 5
  },

   tag: {
    backgroundColor: "#ecd7a5ff",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginTop: 6
  },

  tagText: {
    fontSize: 12,
    fontWeight: "medium"
  }
})