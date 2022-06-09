import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabsNavigation} from "./TabsNavigation";
import {Detalhes} from "../pages/Detalhes";
import React from "react";


const Stack = createNativeStackNavigator();

export const PrivateNavigation: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName={'TabNav'}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="TabNav" component={TabsNavigation}/>
            <Stack.Screen name="Detalhes" component={Detalhes}/>
        </Stack.Navigator>
    );
}
