import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
// View element positions or group multiple elements
// NOTE: remove semi-colon on code inside a View element

const ComponentsScreen = () => {
    const greeting = 'Hi there';
    // NOTE: cannot show a js object inside a {} element
    const greeting2 = <Text style={styles.subHeaderStyle}>Hello</Text>
    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text>{greeting}</Text>
            {greeting2}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen