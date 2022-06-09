import React from "react";
import {Text} from "react-native";
import {FiIho3} from "../FiIho3";
import {View} from "react-native";

export const FiIho2: React.FC = ({children})=>{
    return (
        <View style={{backgroundColor:'#ff0000', flex: 1, width: '100%', padding: 10}}>
        <Text>Filho2 {Date.now()}</Text>
            <FiIho3 />
        </View>
    )
}
