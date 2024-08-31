import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';


const Card = ({ moneda, volume1h, volume24h}) => {

    const [fontsLoaded] = useFonts({
        'NewAmsterdam': require("../assets/fonts/NewAmsterdam-Regular.ttf"),
        'Quicksand': require("../assets/fonts/Quicksand.ttf")
      });
    
      if (!fontsLoaded) return null;

    return (
        <View style={styles.card}>
            <Text style={styles.nombre}> { moneda } </Text>
            <Text style={styles.volume1h}> Volumen en 1 hora (USD): {volume1h ? volume1h.toString() : 0} </Text>
            <Text style={styles.volume24h}> Volumen en 24 horas (USD): {volume24h ? volume24h.toString() : 0} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#27ae60',
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
        elevation: 5,
      },
      nombre: {
        fontFamily: 'NewAmsterdam',
        fontSize: 20,
        marginBottom: 8,
      },
      volume1h: {
        fontFamily: 'Quicksand',
        fontSize: 14,
        marginBottom: 4,
      },
      volume24h: {
        fontFamily: 'Quicksand',
        fontSize: 14,
      },
});

export default Card;