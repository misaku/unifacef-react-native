import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Cadastro} from "../pages/Cadastro";
import {Login} from "../pages/Login";
import React from "react";
import {RouteProp} from "@react-navigation/native";


export type OpenNavigationProps={
    Login: undefined;
    Cadastro: undefined;
}
const Stack = createNativeStackNavigator<OpenNavigationProps>();
export type LoginScreenNavigationProp = NativeStackNavigationProp<OpenNavigationProps, 'Login'>;
export type CadastroScreenNavigationProp = NativeStackNavigationProp<OpenNavigationProps, 'Cadastro'>;
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
