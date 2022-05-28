import React from "react";
import {FiIho1} from "./components/FiIho1";
import {Button} from "react-native";
import {useTesteContextApi} from "./hooks/ContexApi";
import {useZustandStore} from "./hooks/ZustandStore";
import {useStoreContextZustand} from "./hooks/ContextZuztandStore";

export const EstadoGlonbal: React.FC = () => {
    const {addCount} = useTesteContextApi()
    const addCount2 = useZustandStore(state => state.addCount)
    const addCount3 = useStoreContextZustand(state => state.addCount)
    return (
        <>
            <Button title={'Context'} onPress={addCount}/>
            <Button title={'Zustand'} onPress={addCount2}/>
            <Button title={'ZustandC'} onPress={addCount3}/>
            <FiIho1/>
        </>
    )
}
