import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {useEffect, useState} from 'react';

import 'react-native-gesture-handler';


export default function FormNotOptmize() {
  const [valor, setValor] = useState(0)
  const [valor2, setValor2] = useState(0)



  const soma = ()=>{
    console.log('Valor Soma', {valor, valor2})
  }

  useEffect(()=>{
    console.log('Atualizou Total')
  })



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
      <Text>{Date.now()}</Text>
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
