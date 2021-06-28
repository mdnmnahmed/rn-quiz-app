import 'react-native-gesture-handler';
import React from 'react';
import Quiz from './src/Components/Quiz';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Result from './src/Components/Result';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Quiz" component={Quiz} />
                    <Stack.Screen name="Result" component={Result} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;