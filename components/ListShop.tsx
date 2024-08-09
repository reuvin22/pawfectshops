import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

type Props = {}

const ListShop = (props: Props) => {
    const listImage = [
        { source: require('../assets/foods/acc.png'), name: 'Dog Lace' },
        { source: require('../assets/foods/df1.jpg'), name: 'Halo holistic' },
        { source: require('../assets/foods/df2.jpeg'), name: 'Lucky Pets' }
    ]

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
        },
        imgStyle: {
            width: 150,
            height: 150,
            borderRadius: 10
        },
        listImgContainer: {
            marginRight: 10
        },
        name: {
            fontSize: 15,
            marginTop: 5,
            alignSelf: 'center',
            fontWeight: 'bold'
        }
    })

    return (
        <ScrollView style={styles.container} horizontal>
            {listImage.map((img, index) => (
                <TouchableOpacity key={index} style={styles.listImgContainer}>
                    <Image source={img.source} style={styles.imgStyle} />
                    <Text style={styles.name}>{img.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default ListShop