import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Result = ({ route, navigation }) => {
    const { correctAns, wrongAns, name } = route.params;
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30, textDecorationLine: 'underline'}}>Result</Text>
            <Text style={{fontSize: 20, marginTop: 30}}>Name : {name}</Text>
            <Text style={{fontSize: 20, marginTop: 30}}>Correct Answers : {correctAns}</Text>
            <Text style={{fontSize: 20, marginBottom: 50}}>Wrong Answers : {wrongAns}</Text>

            <Button
                title="Start Again"
                onPress={() => navigation.navigate('Quiz')}
            />
        </View>
    );
}

export default Result;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
});