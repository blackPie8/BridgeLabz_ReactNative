import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const cars = [
  {
    id: '1',
    name: 'Lamborghini Huracán',
    image: require('../images/lamboHuracan.webp'),
    description: 'A high-performance sports car with a V10 engine.',
  },
  {
    id: '2',
    name: 'Ferrari 488 Pista',
    image: require('../images/488pista.webp'),
    description: 'A twin-turbocharged V8 Ferrari with stunning design.',
  },
  {
    id: '3',
    name: 'Porsche 911 GT3RS',
    image: require('../images/porsche.webp'),
    description: 'A legendary sports car with remarkable speed and agility.',
  },
  {
    id: '4',
    name: 'McLaren 720S',
    image: require('../images/765lt.jpg'),
    description: 'A lightweight supercar with cutting-edge aerodynamics.',
  },
];

const ExploreCarsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Cars</Text>
      
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Payment', { carName: item.name })}
          >
            <Image source={item.image} style={styles.carImage} />
            <View style={styles.cardContent}>
              <Text style={styles.carName}>{item.name}</Text>
              <Text style={styles.carDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ExploreCarsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  carImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 10,
  },
  carName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  carDescription: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});

