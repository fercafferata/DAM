import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';

export default function App() {
  const [exchanges, setExchanges] = useState([]);
  

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const response = await axios.get('https://rest.coinapi.io/v1/exchanges', {
          headers: {
            'X-CoinAPI-Key': '12AC4B9E-EDEB-4146-8D89-88239A382058', // Clave API
          },
        });
        
        setExchanges(response.data);
      } catch (error) {
        console.error('Error al obtener la lista de exchanges:', error.response ? error.response.data : error.message);
      }
    };

    fetchExchanges();
  }, []);

  const renderItem = ({ item }) => (
    <Card
      moneda={item.name}
      volumen1h={item.volume_1hrs_usd} 
      volumen24h={item.volume_1day_usd}
    />
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={exchanges}
        keyExtractor={(item) => item.exchange_id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccd1d1',
    flex: 1,
    paddingHorizontal: 10,
  },
});
