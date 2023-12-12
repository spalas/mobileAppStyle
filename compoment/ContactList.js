import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts = [
        {
            uid: 1,
            name: 'John',
            status: "he takes all room many people",
            imageUri: "https://images.pexels.com/photos/18221948/pexels-photo-18221948/free-photo-of-beautiful-brunette-woman-in-white-off-the-shoulder-dress-standing-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        },
        {
            uid: 2,
            name: 'John mounted',
            status: "he takes all room many people",
            imageUri: "https://images.pexels.com/photos/19385615/pexels-photo-19385615/free-photo-of-two-monkeys-sitting-on-a-fence-eating-bananas.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        },
        {
            uid: 3,
            name: 'methew budhh',
            status: "he takes all room many people",
            imageUri: "https://images.pexels.com/photos/18907092/pexels-photo-18907092/free-photo-of-a-photo-of-the-golden-gate-bridge-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        },
        {
            uid: 4,
            name: 'biplap mondal',
            status: "he takes all room many people",
            imageUri: "https://images.pexels.com/photos/13135837/pexels-photo-13135837.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        },
        {
            uid: 5,
            name: 'hitehs',
            status: "he takes all room many people",
            imageUri: "https://images.pexels.com/photos/19257502/pexels-photo-19257502/free-photo-of-children-on-a-swing-on-the-edge-of-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        },
        {
            uid: 6,
            name: 'nimay',
            status: "he takes all room many people",
            imageUri: "https://images.pexels.com/photos/18325699/pexels-photo-18325699/free-photo-of-houses-on-a-hill-in-city.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        },
    ];



  return (
    <View >
          <Text style={styles.headingText} >ContactList</Text>
          <ScrollView
              style={styles.container}
              scrollEnabled={false}>
              {contacts.map(({ uid, name, status, imageUri }) => (
                  <View key={uid} style={styles.userCard}>
                      <Image
                          source={{
                              uri:imageUri
                          }}
                          style={styles.userImage}
                      />
                      <View>
                      <Text style={styles.userName}>{ name}</Text>
                      <Text style={styles.userStatus}>{status }</Text>
                      </View>
                      <Text></Text>
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
          paddingHorizontal: 8,
          marginBottom: 8,
            
    },
    container: {
        paddingHorizontal: 16,
        marginBottom:3,
    },
    userCard: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 3,
        backgroundColor: "#8d3daf",
        padding: 6,
        borderRadius:10
        

    },
    userImage: {
        width:60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight:14
    },
    userName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000052"
    },
    userStatus: {},
})