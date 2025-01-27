import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal style = {styles.container}>

        <View style = {[styles.card, styles.cardElevated]}>
          <Text>Swipe</Text>
        </View>

        <View style = {[styles.card, styles.cardElevated]}>
          <Text>Me</Text>
        </View>

        <View style = {[styles.card, styles.cardElevated]}>
          <Text>To</Text>
        </View>

        <View style = {[styles.card, styles.cardElevated]}>
          <Text>Scroll</Text>
        </View>

        <View style = {[styles.card, styles.cardElevated]}>
          <Text>More...</Text>
        </View>

        <View style = {[styles.card, styles.cardElevated]}>
          <Text>🥺</Text>
        </View>

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
    padding: 8
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 5,
      height:5
    },
    shadowColor: '#000000',
    shadowOpacity: 0.4,   // b/w 0 and 1
    shadowRadius: 2
  }
})