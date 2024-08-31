import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';

const Header = ({}) => {

    const [fontsLoaded] = useFonts({
        'NewAmsterdam': require("../assets/fonts/NewAmsterdam-Regular.ttf"),
      });
    
      if (!fontsLoaded) return null;

    return (
        <View style={styles.header}>
            <Text style={styles.titulo}> COIN APP </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontFamily: 'NewAmsterdam',
        fontSize: 30,
        color: 'white',
    },
});

export default Header;