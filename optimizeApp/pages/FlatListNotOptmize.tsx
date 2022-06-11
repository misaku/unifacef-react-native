import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';


interface MyItemProps {
  value: string;
}

const MyItem: React.FC<MyItemProps> = ({value}) => {
  const [count, setCount] = useState(0)
  console.log('MeuItem ---', count)
  return (
    <>
      <Button title={'add + 1 in Item'} onPress={() => setCount(ct => ct + 1)}/>
      <Text>{value} ct({count}) </Text>
    </>
  )
}

export default function FlatListNotOptmize() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState<number[]>([count])

  const addMore = useCallback(() => {
    const value = count + 1;
    setCount(value)
    setData(dt => [...dt, value])
  }, [setData, count])

  const render = ({item}) => <MyItem value={item}/>
  return (
    <View style={styles.container}>
      <Button title={'add + 1'} onPress={addMore}/>
      <FlatList data={data} keyExtractor={(item, idx) => `it-${item}-${idx}`}
                renderItem={render}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
