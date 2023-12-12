import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcard() {
  return (
    <View>
          <Text style={styles.headingText}>Flat card</Text>
          <View style={styles.conatiner}>
              <View style={[styles.card, styles.cardOne]}>
                  <Text>Text</Text>
              </View>
              <View style={[styles.card, styles.cardTow]}>
                  <Text>Text</Text>
              </View>
              <View style={[styles.card, styles.cardThree]}>
                  <Text>Text</Text>
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
    conatiner: {
        flex: 1,
        flexDirection: 'row',
        
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin:8,
    },
    cardOne: {
        backgroundColor: "#808080"
    },
    cardTow: {
        backgroundColor: "#008000"
    },
    cardThree: {
        backgroundColor: "#355E3B"
    },
    
})
