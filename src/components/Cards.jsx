import {View, Text, StyleSheet, Image} from 'react-native'
 
export default function Cards() {
    return (
        <View style={style.container} >

            <View style={style.cards}>

                <Image source={require('../../assets/avatar1.jpg')}
                style={style.avatar}
                />

                <Text style={style.nome}>Ana Vitoria</Text>
                 <Text style={style.email}>ana@email.com</Text>
            </View>

            <View style={style.cards}>

                <Image source={require('../../assets/avatar2.jpg')}
                style={style.avatar}
                />

                <Text style={style.nome}>Karen Santos</Text>
                 <Text style={style.email}>ka@email.com</Text>
            </View>

            <View style={style.cards}>

                <Image source={require('../../assets/avatar3.jpg')}
                style={style.avatar}
                />

                <Text style={style.nome}>Maria Clara</Text>
                 <Text style={style.email}>maria@email.com</Text>
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
      width: 300,
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 12,
      marginBottom: 15,
      shadowColor: "#000",
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 4
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 30 // deixa redonda
    },
    nome:{
        fontSize: 18,
        fontWeight: "bold,",
        marginBottom: 5,
        color: "#333"
    },
    email: {
        fontSize: 14,
        color: "#666"
    }
})
