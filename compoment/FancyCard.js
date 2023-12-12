import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
          <Text style={styles.headingText}>Treading card</Text>
          <View style={[styles.card, styles.cardEloveto]}>
              <Image
                  source={{
                      url:"https://images.unsplash.com/photo-1682686581264-c47e25e61d95?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
                  }}
                  style={styles.cardIamge}
              /> 
              <View style={styles.cardBody}>
                  <Text style={styles.cardTile}>Where</Text>
                  <Text style={styles.cardLabel}>Image name</Text>
                  <Text style={styles.cardDscration}>Anything can do forjue in time hoiur
                      how count havei goof every on os it meake doo enogt
                      how count havei goof every on os it meake doo enogt
                      how count havei goof every on os it meake doo enogt
            
                  </Text>
                  <Text style={styles.cardFooter}>12mint way</Text>
              </View>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal:8

    },

    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal:16, 


    },
    cardEloveto: {
        backgroundColor: "#808080",
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
            
        }
    },
    cardIamge: {
        height: 180, 
        marginBottom: 8,
        borderTopLeftRadius: 6,
       borderTopRightRadius:6,

    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal:12
    },
    cardTile: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 6,
        color: "#0000FF",
        opacity: 15,
    },
    cardLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardDscration: {
        fontSize:12
    },
    cardFooter: {},
})