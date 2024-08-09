import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {}

const Navigation = (props: Props) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
            marginBottom: 20
        },
        img: {
            width: 60,
            height: 60,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            backgroundColor: '#fed7aa'
        },
        imgContainer: {
            flexDirection: 'column'
        }
    })
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imgContainer}>
        <Image source={require('../assets/petGrooming.png')} style={styles.img}/>
        <Text>Grooming</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imgContainer}>
        <Image source={require('../assets/vet.png')} style={styles.img}/>
        <Text>Veterinary</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imgContainer}>
        <Image source={require('../assets/petShop.png')} style={styles.img}/>
        <Text>Pet Shop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imgContainer}>
        <Image source={require('../assets/adopt.png')} style={styles.img}/>
        <Text>Adoption</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Navigation