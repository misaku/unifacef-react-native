import React from "react";
import {Text} from "react-native";
import {FiIho4} from "../FiIho4";
import {View} from "react-native";

export const FiIho3: React.FC = ({children})=>{
    return (
        <View style={{backgroundColor:'#ffdb00', flex: 1, width: '100%', padding: 10}}>
        <Text>Filho3 {Date.now()}</Text>
            <FiIho4 />
        </View>
    )
}
