import React from "react";
import {Text} from "react-native";
import {FiIho2} from "../FiIho2";
import {View} from 'react-native'

export const FiIho1: React.FC = ({children}) => {
    return (
        <View style={{backgroundColor:'#ccc', flex: 1, width: '100%', padding: 10}}>
            <Text>Filho1 {Date.now()}</Text>
            <FiIho2 />
        </View>
    )
}
