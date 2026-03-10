import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Cards from './components/Cards';

export default function App() {
  return (
    <View style={styles.container}>

      <Header/>
      <Cards/>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b199f5ff',
    alignItems: 'center',
    //justifyContent: 'center',
  }
});
