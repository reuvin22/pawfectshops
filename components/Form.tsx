import { View, Text, StyleSheet, TextInput, useWindowDimensions } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
type Props = {
    placeholder?:string,
    onSubmit?: any,
    buttons?: boolean,
    navigation?: any
}

const Form = (props: Props) => {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height; 
    const formInput = []
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            rowGap: 10
        },
        input: {
            borderWidth: 1,
            width: windowWidth > 500 ? "70%" : "80%",
            paddingLeft: 20,
            borderRadius: 5,
        },
        containerBtn: {
            flexDirection: 'row',
            gap: 5,
            justifyContent: 'center'
        }
    })
  return (
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Username' />
        {props.buttons && (
            <View style={styles.containerBtn}>
                <CustomButton btnTitle='Submit'/>
                <CustomButton btnTitle='Back' press={() => props.navigation.navigate('Home')}/>
            </View>
        )
        }
    </View>
  )
}


export default Form