import { View, Button as RNButton, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

type Props = {
  btnTitle?: string;
  press?: () => void;
  color?: string;
};

const CustomButton = (props: Props) => {
  const [btnColor, setBtnColor] = useState<string>('blue');

  useEffect(() => {
    switch (props.color) {
      case 'addToCart':
        setBtnColor('blue');
        break;
      case 'submit':
        setBtnColor('green');
        break;
      case 'delete':
        setBtnColor('red');
        break;
      default:
        setBtnColor('blue');
    }
  }, [props.color]);

  return (
    <View style={[styles.buttonContainer, styles.buttonWrapper]}>
      <View style={styles.buttonWrapper}>
        <RNButton
          title={props.btnTitle}
          onPress={props.press}
          color={btnColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
  },
  buttonWrapper: {
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default CustomButton;
