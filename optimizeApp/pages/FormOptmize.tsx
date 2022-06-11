import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {useEffect, useState} from 'react';

import 'react-native-gesture-handler';
import { useForm, Controller } from "react-hook-form";

export default function FormOptmize() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      valor: '',
      valor2: ''
    }
  });
  const soma = data => console.log(data);

  useEffect(()=>{
    console.log('Atualizou Total')
  })



  return (
    <View style={styles.container}>
      <Text>Valor 1</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{width: '60%', height: 40, backgroundColor: '#f4f4f4'}}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType={'number-pad'}
          />
        )}
        name="valor"
      />
      {errors.valor && <Text>valor é obrigatorio</Text>}

      <Text>Valor 2</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{width: '60%', height: 40, backgroundColor: '#f4f4f4'}}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType={'number-pad'}
          />
        )}
        name="valor2"
      />
      {errors.valor2 && <Text>valor2 é obrigatorio</Text>}
      <Text>{Date.now()}</Text>
      <Button title={'soma'} onPress={handleSubmit(soma)} />
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
