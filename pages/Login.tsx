import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FormContext } from '../util/context'
import Form from '../components/Form'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

type Props = {
    navigation: any
}

const Login = (props: Props) => {
  const navigation = useNavigation()
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      width: '100%',
      borderWidth: 2
    },
    containerBtn: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center'
    },
  })

  const credentials = [
    {placeholder: 'Username'},
    {placeholder: 'Password'}
  ]

  const handleNavigation = () => {
    navigation.navigate('Home')
};
  return (
    <View style={styles.container}>
      <FormContext.Provider value={{ 
        initialField: credentials,
        title: true,
        titleText: 'Login',
       }}>
        <Form/>
        <View style={styles.containerBtn}>
            <CustomButton btnTitle='Login' />
            <CustomButton btnTitle='Back' press={handleNavigation} />
        </View>
      </FormContext.Provider>
    </View>
  )
}

export default Login