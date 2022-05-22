import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Cadastro} from "../pages/Cadastro";
import {Login} from "../pages/Login";
import React from "react";

const Stack = createNativeStackNavigator();

export const OpenNavigation: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName={'Login'}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Cadastro" component={Cadastro}/>
        </Stack.Navigator>
    );
}
