import { View, Text, StyleSheet, TextInput, useWindowDimensions } from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
import { useFormContext } from '../util/context';
import { useNavigation } from '@react-navigation/native';

type Props = {
    placeholder?: string;
    onSubmit?: any;
    buttons?: boolean;
    value?: any;
    onChange?: any;
    screenName?: string; // Changed to string
};

const Form = (props: Props) => {
    const navigation = useNavigation(); // No typing here
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const context = useFormContext();
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            rowGap: 20
        },
        input: {
            borderWidth: 1,
            width: windowWidth > 500 ? "70%" : "80%",
            height: windowHeight > 500 ? 35 : 45,
            paddingLeft: 20,
            borderRadius: 5,
        },
        containerBtn: {
            flexDirection: 'row',
            gap: 5,
            justifyContent: 'center'
        },
        title: {
            fontSize: windowWidth > 500 ? 30 : 25,
            fontWeight: 'bold'
        }
    });

    const handleNavigation = () => {
        navigation.navigate(props.screenName)
    };

    return (
        <View style={styles.container}>
            {context?.title && (
                <Text style={styles.title}>{context?.titleText}</Text>
            )}
            {context?.initialField?.map((item: any, index: number) => (
                <TextInput placeholder={item.placeholder} value={item.value} key={index} style={styles.input} />
            ))}
            {props.buttons && (
                <View style={styles.containerBtn}>
                    <CustomButton btnTitle='Submit' />
                    <CustomButton btnTitle='Back' press={handleNavigation} />
                </View>
            )}
        </View>
    );
};

export default Form;