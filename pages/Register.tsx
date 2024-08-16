import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import Form from '../components/Form'

type Props = {
    navigation: any
}
const Register = (props: Props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    }
  })
  return (
    <View style={styles.container}>
      <Form 
        buttons = {true}
      />
    </View>
  )
}

export default Register;
