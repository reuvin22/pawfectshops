import { View, Button as RNButton, StyleSheet } from 'react-native';
import React, { useState } from 'react';

type Props = {
  btnTitle: string;
  press?: () => void;
};

const CustomButton = (props: Props) => {
  const [btnColor, setBtnColor] = useState<string>('blue'); // Initial color set to 'blue'

  return (
    <View style={styles.buttonContainer}>
      <RNButton
        title={props.btnTitle}
        onPress={props.press} 
        color={btnColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
  },
});

export default CustomButton;
