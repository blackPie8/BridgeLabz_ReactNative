import { Button, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';

const HomeScreen = (props) => {
  return (
    <ImageBackground 
      source={require('../images/carBackground.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Cars4U</Text>
        <Text style={styles.subtitle}>Find your dream car today!</Text>
        
        <View style={styles.contentContainer}>
          <Text style={styles.description}>Browse through our extensive collection of new and used cars. Whether you're looking for luxury, performance, or affordability, we've got you covered.</Text>
        </View>

        <TouchableOpacity style={styles.buttonOne} onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonTwo} onPress={() => props.navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    marginBottom: 130,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#ddd',
    marginBottom: 15,
    textAlign: 'center',
  },
  contentContainer: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
  },
  buttonOne: {
    backgroundColor: '#007bff', // Blue color
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginBottom: 15,
    width: 200,
    alignItems: 'center',
  },
  buttonTwo: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 15,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

