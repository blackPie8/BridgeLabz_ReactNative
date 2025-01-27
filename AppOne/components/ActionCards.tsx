import { Linking, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink: string){
      Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style = {styles.headingText}>Julius Caesar</Text>
      <View style = {[styles.card, styles.elevatedCard]}>
        <View style = {styles.headingContainer}>
        <Text style = {styles.headerText}>
          I came, I saw, I conquered
        </Text>
        </View>
        <Image 
        source = {require('../images/img2.jpeg')}
        style = {styles.cardImage}
        />
        <View style = {styles.bodyContainer}>
          <Text numberOfLines={3}>
          Julius Caesar's greatness was a blend of military brilliance, political reform, strategic vision, and a legacy that reshaped Roman history forever.
          As a general, he conquered vast territories, including Gaul, showcasing strategic brilliance and unmatched leadership on the battlefield.
          </Text>
        </View>

        <View style = {styles.footerContainer}>

          <TouchableOpacity
          onPress={() => openWebsite('https://en.wikipedia.org/wiki/Julius_Caesar')}
          >
            <Text style = {styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => openWebsite('https://github.com/blackPie8')}
          >
            <Text style = {styles.socialLinks}>My GitHub</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  card: {
    width: 370,
    height: 450,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16
  },
  elevatedCard: {
    backgroundColor: '#E7E8D1',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: '#333',
    shadowOpacity: 0.4
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500'
  },
  cardImage: {
    height: 300,
    width: 370,
    resizeMode: 'cover',
    borderBottomEndRadius: 6,
    borderBottomStartRadius: 6
  },
  bodyContainer: {
    padding: 8
  },
  footerContainer: {
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  socialLinks: {
    fontSize: 15,
    color: '#000',
    backgroundColor: '#A7BEAE',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 6
  }
})