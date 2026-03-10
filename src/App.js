import { View, StyleSheet, ScrollView } from 'react-native'
import Header2 from './components/Header2'
import ProductCard from './components/ProductCard'

export default function App() {
  return (
    <View style={styles.container}>

      <Header2 />

      <ScrollView contentContainerStyle={styles.produtos}>

        <ProductCard
          imagem={require('../assets/livro1.jpg')}
          nome="A Hipótese do Amor"
          preco="42,90"
          genero="Romance"
        />

        <ProductCard
          imagem={require('../assets/livro2.jpg')}
          nome="Amor Teoricamente"
          preco="42,90"
          genero="Romance"
        />

        <ProductCard
          imagem={require('../assets/livro6.jpg')}
          nome="A Razão do Amor"
          preco="41,90"
          genero="Romance"
        />

        <ProductCard
          imagem={require('../assets/livro5.jpg')}
          nome="Jogo de amor para dois"
          preco="34,90"
          genero="Romance"
        />

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  produtos: {
    width: "100%",
    maxWidth: 600,
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10
  }
})