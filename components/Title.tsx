import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

type Props = {
    title?: string,
    navigation?: any,
    titleLeft?: string,
    titleRight?: string,
    navigateLeft?: string,
    navigateRight?: string,
    mainTitle?: string
}

const Title = (props: Props) => {
    const navigation = useNavigation()
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

    const handleNavigateLeft = () => {
        navigation.navigate(props.navigateLeft)
    }
    const handleNavigateRight = () => {
        navigation.navigate(props.navigateRight)
    }
    return (
        <View style={styles.title}>
            <TouchableOpacity onPress={handleNavigateLeft}>
                <Text style={styles.data}>{props.titleLeft}</Text>
            </TouchableOpacity>
            <Text style={styles.titleText}>{props.mainTitle}</Text>
            <TouchableOpacity onPress={handleNavigateRight}>
                <Text style={styles.data}>{props.titleRight}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Title;