import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Listagem} from "../pages/Listagem";
import {Carrinho} from "../pages/Carrinho";
import {Perfil} from "../pages/Perfil";
import React from "react";
import color from "color";

import {MaterialCommunityIcons} from '@expo/vector-icons';
import {BACKGROUND_COLOR, PRIMARY, SECUNDARY} from "../styles/colors";

const Tab = createMaterialBottomTabNavigator();

export const TabsNavigation: React.FC = () => {
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            barStyle={{backgroundColor: SECUNDARY}}
            activeColor={color(PRIMARY).darken(0.15).hex()}
            inactiveColor={BACKGROUND_COLOR}
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
