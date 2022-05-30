import {createMaterialBottomTabNavigator, MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs';
import {Listagem} from "../pages/Listagem";
import {Carrinho} from "../pages/Carrinho";
import {Perfil} from "../pages/Perfil";
import React from "react";
import color from "color";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useMyTheme} from "../hooks/Theme.hooks";

export type TabsNavigationParamList = {
    Home: undefined;
    Cart: undefined;
    Perfil: undefined;
};

export  type HomeScreenTabNavigationProps = MaterialBottomTabNavigationProp<TabsNavigationParamList,'Home'>
export  type CartScreenTabNavigationProps = MaterialBottomTabNavigationProp<TabsNavigationParamList,'Cart'>
export  type PerfilScreenTabNavigationProps = MaterialBottomTabNavigationProp<TabsNavigationParamList,'Perfil'>

const Tab = createMaterialBottomTabNavigator();

export const TabsNavigation: React.FC = () => {
    const {theme} = useMyTheme()
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            barStyle={{backgroundColor: theme.colors.secondary}}
            activeColor={color(theme.colors.primary).darken(0.15).hex()}
            inactiveColor={theme.colors.background}
        >
            <Tab.Screen name="Home" component={Listagem}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({color}) => (
                                <MaterialCommunityIcons name="home" color={color} size={26}/>
                            ),
                        }}
            />
            <Tab.Screen name="Cart" component={Carrinho}
                        options={{
                            tabBarLabel: 'Carrinho',
                            tabBarIcon: ({color}) => (
                                <MaterialCommunityIcons name="cart" color={color} size={26}/>
                            ),
                        }}
            />
            <Tab.Screen name="Perfil" component={Perfil}
                        options={{
                            tabBarLabel: 'Perfil',
                            tabBarIcon: ({color}) => (
                                <MaterialCommunityIcons name="account" color={color} size={26}/>
                            ),
                        }}
            />
        </Tab.Navigator>
    );
}
