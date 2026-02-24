import {View, Text, StyleSheet, Image} from 'react-native'

export default function Header() {
    return(
       <View style={styles.container}> 
            <Text style={styles.logotipo}>Logo</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000000",
        width: "100%",
        height: 40, 
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    logotipo: {
        color: "#fff",
    }

})