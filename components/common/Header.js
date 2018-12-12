import React from 'react';
import { Text, View } from 'react-native';


// creating header component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return ( 
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};


// Styling header component
const styles = {

    viewStyle: {
        backgroundColor: '#F3F3F3',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15, 
    },


    textStyle: {
        fontSize: 20
    }
};

export { Header };
