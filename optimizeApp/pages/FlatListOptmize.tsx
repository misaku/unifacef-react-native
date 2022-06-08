import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback, useEffect, useState} from 'react';


interface MyItemProps {
  value: string;
}

const MyItem: React.FC<MyItemProps> = memo(({value}) => {
  const [count, setCount] = useState(0)
  console.log('MeuItem2 ---', count)
  return (
    <>
      <Button title={'add + 1 in Item'} onPress={() => setCount(ct => ct + 1)}/>
      <Text>{value} ct({count}) </Text>
    </>
  )
})

export default function FlatListOptmize() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState<number[]>([count])

  const addMore = useCallback(() => {
    const value = count + 1;
    setCount(value)
    setData(dt => [...dt, value])
  }, [setData, count])

  const render = useCallback(({item})=><MyItem value={item} />,[])

  return (
    <View style={styles.container}>
      <Button title={'add + 1'} onPress={addMore}/>
      <FlatList data={data} keyExtractor={(item) => `it-${item}`}
                renderItem={render}/>
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
