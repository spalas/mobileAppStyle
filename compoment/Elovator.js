import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Elovator() {
  return (
      <SafeAreaView>
          <View>
              <Text style={styles.headingText}>Elovator</Text>
          </View>
          <ScrollView horizontal={true} style={styles.container}>
              <View style={[styles.card, styles.cardElovertor]} >
                 <Text>Tap</Text> 
              </View>
              <View style={[styles.card, styles.cardElovertor]} >
                 <Text>me🎁</Text> 
              </View>
              <View style={[styles.card, styles.cardElovertor]} >
                 <Text>Body</Text> 
              </View>
              <View style={[styles.card, styles.cardElovertor]} >
                 <Text>Bunch❤</Text> 
              </View>
              <View style={[styles.card, styles.cardElovertor]} >
                 <Text>Touch</Text> 
              </View>
              <View style={[styles.card, styles.cardElovertor]}>
                 <Text>😘</Text> 
              </View>
          </ScrollView>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal:8

    },
    container: {
        padding:8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        margin: 8,
    
        width: 100,
       height: 100
    },
    cardElovertor: {
        backgroundColor: "#cad5e2",
        opacity: 0.5,
        elevation: 4,
        shadowOffset: {
            width: 8,
            height:8,
        },
        shadowColor: "#ef5353",
        shadowOpacity: 0.5,
        shadowRadius:1,

        
    }
    
})