import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import Form from '../components/Form'
import { FormContext } from '../util/context'
import { useNavigation } from '@react-navigation/native'
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
  const formInput = [
    { placeholder: "First Name"},
    { placeholder: "Last Name"},
    { placeholder: "Contact Number"},
    { placeholder: "Email"},
    { placeholder: "Password"},
    { placeholder: "Confirm Password"},
  ]
  return (
    <View style={styles.container}>
      <FormContext.Provider value={{
        initialField: formInput,
        title: true,
        titleText: 'Registration'
      }}>
        <Form 
          buttons = {true}
          screenName='Home'
        />
      </FormContext.Provider>
    </View>
  )
}

export default Register;
