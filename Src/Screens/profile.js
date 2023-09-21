//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// create a component
const Profile = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={"#FF1493"} />
        <View style={styles.container}>
            <Text style={{ color: "white" }}>Profile</Text>
        </View>
        
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF1493',
    },
});

//make this component available to the app
export default Profile;
