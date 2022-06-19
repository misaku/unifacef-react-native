<<<<<<< HEAD
import {createNativeStackNavigator,NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TabsNavigation, TabsNavigationParamList} from "./TabsNavigation";
import {Detalhes} from "../pages/Detalhes";
import React from "react";
import {RouteProp, NavigatorScreenParams} from "@react-navigation/native";
import {Historico} from '../pages/Historico';


export type PrivateNavigationParamList = {
    TabNav: NavigatorScreenParams<TabsNavigationParamList>;
    Detalhes: { id: number };
    Historico: undefined
};
export type DetalhesScreenRouteProp = RouteProp<PrivateNavigationParamList, 'Detalhes'>;
export type DetalhesScreenNavigationProp = NativeStackNavigationProp<PrivateNavigationParamList, 'Detalhes'>;
export type HistoricoScreenNavigationProp = NativeStackNavigationProp<PrivateNavigationParamList, 'Historico'>;
export type TabNavScreenNavigationProp = NativeStackNavigationProp<PrivateNavigationParamList, 'TabNav'>;
const Stack = createNativeStackNavigator<PrivateNavigationParamList>();

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
            <Stack.Screen name="Historico" component={Historico}/>
        </Stack.Navigator>
    );
}
=======
import {createNativeStackNavigator,NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TabsNavigation, TabsNavigationParamList} from "./TabsNavigation";
import {Detalhes} from "../pages/Detalhes";
import React from "react";
import {RouteProp, NavigatorScreenParams} from "@react-navigation/native";


export type PrivateNavigationParamList = {
    TabNav: NavigatorScreenParams<TabsNavigationParamList>;
    Detalhes: { id: number };
};
export type DetalhesScreenRouteProp = RouteProp<PrivateNavigationParamList, 'Detalhes'>;
export type DetalhesScreenNavigationProp = NativeStackNavigationProp<PrivateNavigationParamList, 'Detalhes'>;
export type TabNavScreenNavigationProp = NativeStackNavigationProp<PrivateNavigationParamList, 'TabNav'>;
const Stack = createNativeStackNavigator<PrivateNavigationParamList>();

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
>>>>>>> 445fab65ab6d86a166b51d28fe270d4262e5c660
