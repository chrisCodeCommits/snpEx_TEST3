import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containertyle } = styles;

    return (
    <View style={containertyle}>
        <Text style={labelStyle}>{label}</Text>

        <TextInput
            secureTextEntry={secureTextEntry}
            autoCorrect={false}
            placeholder={placeholder}
            style={inputStyle}
            value={value}
            onChangeText={onChangeText}
        />
    </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }, 

    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },

    containertyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alineItems: 'center'
    },
};

export { Input };
