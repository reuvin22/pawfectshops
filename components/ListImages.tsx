import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

type Props = {}

const ListImages = (props: Props) => {
    const listImage = [
        { source: require('../assets/adopted/cat1.jpg'), name: 'Mimi' },
        { source: require('../assets/adopted/dog1.jpg'), name: 'Ruru' },
        { source: require('../assets/adopted/dog2.jpeg'), name: 'Momo' },
        { source: require('../assets/adopted/cat1.jpg'), name: 'Mimi' }
    ]

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
        },
        imgStyle: {
            width: 100,
            height: 100,
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
        <ScrollView style={styles.container} horizontal
            showsHorizontalScrollIndicator={false}
        >
            {listImage.map((img, index) => (
                <TouchableOpacity key={index} style={styles.listImgContainer}>
                    <Image source={img.source} style={styles.imgStyle} />
                    <Text style={styles.name}>{img.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default ListImages
