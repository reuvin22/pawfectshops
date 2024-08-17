import { View, Text, StyleSheet, Image, ScrollView, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import Title from '../components/Title'
import Navigation from '../components/Navigation'
import ListImages from '../components/ListImages'
import ListShop from '../components/ListShop'

type Props = {
    navigation: any
}

const Homepage = (props: Props) => {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

    const styles = StyleSheet.create({
        home: {
            flex: 1,
            marginVertical: 10,
            width: windowWidth > 500 ? "70%" : "95%",
            alignSelf: 'center',
        },
        image: {
            width: '100%',
            height: 180,
            position: 'relative',
            borderRadius: 10
        },
        coverContainer: {
            borderColor: 'black',
            backgroundColor: 'black',
            borderWidth: 2,
            borderRadius: 10
        },
        adopted: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        adoptedText: {
            flexDirection: 'column',
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
            marginTop: 30
        },
        foodTitle: {
            flexDirection: 'column',
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
            marginTop: 30
        }
    });

    return (
        <ScrollView style={styles.home}
            showsVerticalScrollIndicator={false}
        >
            <Title 
                mainTitle='PAWFECT SHOP'
                navigateLeft='Register'
                navigateRight='Login'
                titleLeft='Register'
                titleRight='Login'
            />
            <Search />
            <Navigation />
            <View style={styles.coverContainer}>
                <Image 
                    source={require('../assets/Cover.png')} 
                    style={styles.image}
                />
            </View>
            <View style={styles.adopted}>
                <Text style={styles.adoptedText}>Adopted Pets</Text>
                <ListImages />
                <Text style={styles.foodTitle}>Foods and Accessories</Text>
                <ListShop />
                <TouchableOpacity>
                    <Text style={styles.adoptedText}>See More...</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Homepage;
