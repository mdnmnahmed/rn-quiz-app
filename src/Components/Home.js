import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, StatusBar, SafeAreaView, ScrollView, Image, View, Button, Text } from 'react-native';

const Home = ({ navigation }) => {

    return (
        <>
            {/* <SafeAreaView> */}
            <StatusBar
                animated={true}
                backgroundColor="#42474e"
            />
            <View style={styles.container}>
                <Image
                    style={{ width: 300, height: 300, }}
                    source={require('../../assets/character_lappy.png')}
                />
                <View style={{paddingTop: 30, paddingBottom: 30}}>
                    <Text>Test your programming Skills</Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', margin: 40 }}>
                <Button title="Start Quiz"
                    onPress={() => navigation.navigate('Quiz')}
                />
            </View>
        </>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },


});