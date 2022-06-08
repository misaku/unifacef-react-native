import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {useCallback, useEffect, useMemo, useState} from 'react';



export default function ValueOptmize() {
  const [valor, setValor] = useState(0)
  const [valor2, setValor2] = useState(0)

  const total = useMemo(()=>(valor + 1),[valor])

  const soma = useCallback(()=>{
    console.log('Valor Soma', valor2 + 1)
  },[valor2])

  useEffect(()=>{
    console.log('Atualizou Total', total)
  },[total])

  useEffect(()=>{
    console.log('Atualizou Soma')
  },[soma])

  return (
    <View style={styles.container}>
      <Text>Valor 1</Text>
      <TextInput
        style={{width: '60%', height: 40, backgroundColor: '#f4f4f4'}}
        value={valor.toString()}
        keyboardType={'number-pad'}
        onChangeText={(txt)=>setValor(Number(txt)||0)}
      />
      <Text>Valor 2</Text>
      <TextInput
        style={{width: '60%', height: 40, backgroundColor: '#f4f4f4'}}
        value={valor2.toString()}
        onChangeText={(txt)=>setValor2(Number(txt)||0)}
      />
      <Text>Total {total}</Text>
      <Text>Total 2 {valor2}</Text>
      <Button title={'soma'} onPress={soma} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
