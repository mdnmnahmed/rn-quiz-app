import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, StatusBar, ScrollView, Image, View, Button, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

const Home = ({ navigation }) => {
    const [name, setName] = useState("");

    return (
        <>
            <StatusBar
                animated={true}
                backgroundColor="#42474e"
            />
            <View style={styles.container}>
                <Image
                    style={{ width: 300, height: 300, }}
                    source={require('../../assets/character_lappy.png')}
                />
                <View style={{ paddingTop: 30, paddingBottom: 30 }}>
                    <Text style={{ fontSize: 20 }}>Test your programming Skills</Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', margin: 40 }}>
                <View style={{ paddingTop: 30, paddingBottom: 20 }}>
                    <TextInput
                        placeholder="Enter your Name"
                        onChangeText={setName}
                        require={true}
                    />
                </View>
                <Button title="Start Quiz"
                    onPress={() => navigation.navigate('Quiz', { name })}
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