import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({ route, navigation }) => {

    const {myName} = route.params;

    return (
        <View style={styles.mainContainer}>
            <Text style={[styles.mainHeader]}>Welcome {myName} :)</Text>
            <Button title='Go Back' onPress={() => navigation.goBack()} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    mainHeader: {
        fontSize: 35,
        color: "#4c5dab",
        marginTop: 0,
        textTransform: "capitalize",
    }
})