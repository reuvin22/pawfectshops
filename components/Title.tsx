import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string;
    navigation: any;
}

const Title = (props: Props) => {
    const { width } = useWindowDimensions();
    const styles = StyleSheet.create({
        titleText: {
            fontSize: 18,
            fontWeight: 'bold',
            paddingTop: width > 360 ? 25 : 35
        },
        title: {
            justifyContent: 'space-evenly',
            alignSelf: 'center',
            flexDirection: 'row',
            width: '100%',
            gap: 30,
            marginBottom: 5,
            marginTop: width > 360 ? 25 : 20
        },
        data: {
            fontSize: 15,
            paddingTop: width > 360 ? 25 : 35
        }
    });

    return (
        <View style={styles.title}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                <Text style={styles.data}>Register</Text>
            </TouchableOpacity>
            <Text style={styles.titleText}>PAWFECT SHOP</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.data}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Title;