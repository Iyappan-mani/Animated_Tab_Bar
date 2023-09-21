//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// create a component
const Order = () => {
    return (
        <View style={styles.container}>
             <StatusBar barStyle="light-content" backgroundColor={"green"} />
            <Text style={{color:"white"}}>order</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
});

//make this component available to the app
export default Order;
