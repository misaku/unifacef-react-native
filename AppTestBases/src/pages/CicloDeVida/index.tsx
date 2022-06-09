import React, {useEffect, useState, useCallback, useMemo} from "react";
import {Alert, Text, TextInput, Switch, View} from "react-native";

export const CicloDeVida:React.FC = ()=>{
    const [countMount, setCountMount] = useState<number>(0);
    const [countUpdate, setCountUpdate] = useState<number>(0);
    const [mostrarAlertaUpdt, setMostrarAlertaUpdt] = useState<boolean>(true);
    const [countUpdateEpecialy, setCountUpdateEpecialy] = useState<string>('????');
    const [numero, setNumero] = useState<string>('');
    const [numero2, setNumero2] = useState<string>('');

    const total = useMemo(()=>numero+numero2,[numero, numero2])
    const testeFunc = useCallback((x)=>{
        return x+numero
    },[numero])
    
    //ComponenteDidMount
    useEffect(()=>{
        setCountMount(valorAtual=>valorAtual+1)
        // Alert.alert('Abriu')
        return ()=>{
            //ComponentWillUmount
            Alert.alert('compomente será desmontato')
        }
    },[])

    //ComponenteDidUpdate
    useEffect(()=>{
        if(mostrarAlertaUpdt)  Alert.alert('atualizou')
    })

    //ComponenteWillUpdate
    useEffect(()=>{
        if(!numero){
            setCountUpdateEpecialy('????')
        } else {
           let valorNumerico =  Number(numero);
           if(valorNumerico%2===0){
               setCountUpdateEpecialy('PAR')
           } else {
               setCountUpdateEpecialy('IMPAR')
           }
        }
        setCountUpdate(valorAtual=>valorAtual+1)
    },[numero])

    return (<View style={{ alignItems:'center', justifyContent: 'center'}}>
            <Text>contagem de inicio: {countMount}</Text>
            <Text>seu numero é: {countUpdateEpecialy}</Text>
            <Text>{total}</Text>
            <Text>mostar alerta de atualização?</Text>
            <Switch
                onValueChange={setMostrarAlertaUpdt}
                value={mostrarAlertaUpdt}
            />
            <TextInput  value={numero} style={{backgroundColor: '#f4f4f4', padding: 10, width: '100%'}}
                        onChangeText={setNumero}  placeholder={'Informe um numero'} keyboardType={"number-pad"}></TextInput>
           <TextInput  value={numero2} style={{backgroundColor: '#f4f4f4', padding: 10, width: '100%'}}
                        onChangeText={setNumero2}  placeholder={'Informe um numero'} keyboardType={"number-pad"}></TextInput>
        </View>
    )
}
