import React from "react";
import {Text} from "react-native";
import {View} from "react-native";
import {useTesteContextApi} from "../../hooks/ContexApi";
import {useZustandStore} from "../../hooks/ZustandStore";
import {useStoreContextZustand} from "../../hooks/ContextZuztandStore";

export const FiIho4: React.FC = ({children})=>{
    const {contagem, list} = useTesteContextApi()
    const  contagemZ = useZustandStore(state => state.contagem)
    const  contagemZc = useStoreContextZustand(state => state.contagem)
    const  listZ = useZustandStore(state => state.list)
    const  listZc = useStoreContextZustand(state => state.list)
    return (
        <View style={{backgroundColor:'#FFF', flex: 1, width: '100%', padding: 10}}>
        <Text>Filho4 {Date.now()}</Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                    <Text>Contagem Context {contagem}</Text>
                    {list.map(item=><Text key={`it${item}`}>item {item}</Text>)}
                </View>
                <View style={{flex: 1}}>
                    <Text>Contagem Zustand {contagemZ}</Text>
                    {listZ.map(item=><Text key={`it${item}`}>item {item}</Text>)}
                </View>
                <View style={{flex: 1}}>
                    <Text>Contagem ZustandC {contagemZc}</Text>
                    {listZc.map(item=><Text key={`it${item}`}>item {item}</Text>)}
                </View>
            </View>


        </View>
    )
}
