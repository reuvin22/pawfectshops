import { View, Text, Button as RNButton } from 'react-native'
import React, { useState } from 'react'

type Props = {
    btnTitle: string,
    press?:any,
    navigation?:any
}

const CustomButton = (props: Props) => {
  const [btnColor, setBtnColor] = useState('')

  let color;
  switch(btnColor){
    case 'green':
    
    break;
    default:
  }
  return (
    <View>
      <RNButton title={props.btnTitle} onPress={props.press}/>
    </View>
  )
}

export default CustomButton