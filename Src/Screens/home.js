//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={"blue"} />
            <Text style={{color:"white"}}>home</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
});

//make this component available to the app
export default Home;
