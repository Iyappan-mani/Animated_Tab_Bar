//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// create a component
const Cart = () => {
    
    return (
        <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"red"} />

            <Text style={{color:"white"}}>cart</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
});

//make this component available to the app
export default Cart;
