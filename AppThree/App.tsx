import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const ProfilePage = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.profileCard}>
            <Image
              source={require('./images/profilePic.jpg')}
              style={styles.profileImage}
            />
            <Text style={styles.name}>Naila Stefenson</Text>
            <Text style={styles.bio}>UX/UI Designer</Text>
          </View>

          <View style={styles.infoSection}>
            {[
              { label: 'Email', value: 'google@gmail.com' },
              { label: 'Contact', value: '8888 - 00991' },
              { label: 'University', value: 'Stanford University' },
              { label: 'Premium', value: 'Yes' },
              { label: 'Friends', value: '33' },
              { label: 'Followers', value: '29' },
            ].map((item, index) => (
              <View key={index} style={styles.infoCard}>
                <Text style={styles.infoLabel}>{item.label}</Text>
                <Text style={styles.infoValue}>{item.value}</Text>
              </View>
            ))}
          </View>

          <View style={styles.logoutButtonContainer}>
            <Button title="Logout" color="#FF6F61" onPress={() => alert('Logged out')} />
          </View>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>You clicked {count} times</Text>
            <Button
              title="Click me"
              onPress={() => setCount(count + 1)}
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f5f9',
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f5f9',
    padding: 20,
  },
  profileCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FF6F61',
    marginBottom: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
  },
  bio: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
  },
  infoSection: {
    flex: 1,
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  logoutButtonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default ProfilePage;