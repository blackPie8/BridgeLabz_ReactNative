import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Aarav Gupta',
      status: 'Ensuring your transactions are secure',
      imageUrl: 'https://avatars.githubusercontent.com/u/12345678?v=4',
    },
    {
      uid: 2,
      name: 'Isha Sharma',
      status: 'Designing seamless user experiences',
      imageUrl: 'https://avatars.githubusercontent.com/u/23456789?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Rohit Mehta',
      status: 'Optimizing payment gateways',
      imageUrl: 'https://avatars.githubusercontent.com/u/34567890?v=4',
    },
    {
      uid: 5,
      name: 'Ananya Verma',
      status: 'Crafting intuitive payment features',
      imageUrl: 'https://avatars.githubusercontent.com/u/45678901?v=4',
    }
  ];
  return (
    <View>
      <Text style = {styles.headingText}>ContactList</Text>
      <ScrollView
      style = {styles.container}
      scrollEnabled = {false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key = {uid} style  ={styles.userCard}>
            <Image 
            source = {{
              uri: imageUrl
            }}
            style = {styles.userImage}
            />
            <View>
            <Text style = {styles.userName}>{name}</Text>
            <Text style = {styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4
  },
  userCard: {
    flex: 1,
    flexDirection:  'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#edede9',
    padding: 4,
    borderRadius: 14
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#023047'
  },
  userStatus: {
    fontSize: 12
  }
})