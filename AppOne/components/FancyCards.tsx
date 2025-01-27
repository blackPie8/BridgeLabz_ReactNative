import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Trending Places</Text>

    <View style = {[styles.card, styles.cardElevated]}>
    <Image source = {require('../images/img1.jpg')} style = {styles.cardImage} />
    <View style = {styles.cardBody}>
      <Text style = {styles.cardTitle}>Rome</Text>
      <Text style = {styles.cardLabel}>Italy</Text>
      <Text style = {styles.cardDescription}>Ancient ruins and vibrant streets, Rome enchants with timeless charm.</Text>
      <Text style = {styles.cardFooter}>Visit Now!</Text>
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
    height: 450,
    width: 370,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16
  },
  cardElevated: {
    backgroundColor: '#000000',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1
    }
  },
  cardImage: {
    height: 300,
    width: 370,
    resizeMode: 'cover',
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4
  },
  cardLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 4
  },
  cardDescription: {
    color: '#EAF0F1',
    fontSize: 13,
    marginBottom: 6
  },
  cardFooter: {
    color: '#FFFFFF'
  }
})