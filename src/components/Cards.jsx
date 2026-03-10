import {View, Text, StyleSheet} from 'react-native'
import {Image} from 'expo-image'
 
export default function Cards() {
    return (
        <View style={style.container} >

            <View style={style.cards}>

                <Image source={require('../../assets/avatar1.jpg')}
                style={style.avatar}
                />
            <View style={style.texto}>
                <Text style={style.nome}>Ana Vitoria</Text>
                 <Text style={style.email}>ana@email.com</Text>
            </View>
            </View>

            <View style={style.cards}>

                <Image source={require('../../assets/avatar2.jpg')}
                style={style.avatar}
                />
            <View style={style.texto}>
                <Text style={style.nome}>Karen Santos</Text>
                 <Text style={style.email}>ka@email.com</Text>
            </View>
            </View>

            <View style={style.cards}>

                <Image source={require('../../assets/avatar3.jpg')}
                style={style.avatar}
                />
            
            <View style={style.texto}>
                <Text style={style.nome}>Maria Clara</Text>
                 <Text style={style.email}>maria@email.com</Text>
            </View>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    cards: {
      width: 400,
      backgroundColor: "#fff",
      padding: 30,
      borderRadius: 12,
      marginBottom: 15,
      shadowColor: "#000",
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 4,
      flexDirection: "row",
      alignItems: "center",
      borderColor: "#928c8cff",
      borderWidth: 1
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30 
    },
    texto: {
        marginLeft: 13
    }, 
    nome:{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#333"
    },
    email: {
        fontSize: 14,
        color: "#666"
    }
})
