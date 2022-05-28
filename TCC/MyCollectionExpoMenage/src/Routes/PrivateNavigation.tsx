import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabsNavigation} from "./TabsNavigation";
import {Detalhes} from "../pages/Detalhes";
import React from "react";
import {RouteProp} from "@react-navigation/native";

type RootStackParamList = {
    TabNav: undefined;
    Detalhes: { id: number };
};
export type DetalhesScreenRouteProp = RouteProp<RootStackParamList, 'Detalhes'>;
const Stack = createNativeStackNavigator<RootStackParamList>();

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
