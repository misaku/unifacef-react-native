import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback, useEffect, useState} from 'react';


interface MyItemProps {
  value: string;
}

const MyItem: React.FC<MyItemProps> = memo(({value}) => {
  return (<View style={{  width:"100%", height:60, borderWidth: 1 }}><Text>{value} </Text></View>)
})

export default function FlatListOptmize2() {

  const [data, setData] = useState<number[]>([])

  useEffect(()=>{
    let list = []
    for (let i =0; i<1000; i++){
      list.push(i)
    }
    setData(list)
  },[])

  const render = ({item}:any) => <MyItem value={item}/>
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, idx) => `it-${item}-${idx}`}
        renderItem={render}
        getItemLayout={(data, index) => (
          {length: 60, offset: 60 * index, index}
        )}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
