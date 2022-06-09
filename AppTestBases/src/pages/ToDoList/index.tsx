import React, {Fragment, useState} from "react";
import {ScrollView, Text, TextInput, Button, View} from 'react-native'

export interface ItemList {
    id: number;
    text: string;
}

export interface ToDoListProps {
    titulo: string;
}

export const ToDoList: React.FC<ToDoListProps> = ({children, titulo}) => {
    const [indice, setIndice] = useState<number>(0)
    const [texto, setTexto] = useState<string>('')
    const [list, setList] = useState<ItemList[]>([])


    const addItem = () => {
        const newIndice = indice + 1;
        setIndice(newIndice)
        setTexto('')
        const item: ItemList = {
            id: newIndice,
            text: texto
        }
        setList(atual => [...atual, item])
    }

    const removeItem = (id: number) => setList(atual => atual.filter(item => item.id !== id))

    return (
        <>
            <Text>{titulo}</Text>
            {children}
            <View style={{width: '100%', maxHeight: 80, flexDirection: 'row'}}>
                <TextInput
                    value={texto}
                    onChangeText={setTexto}
                    style={{backgroundColor: '#f4f4f4', padding: 10, flex: 1}}
                /><Button title="add" onPress={addItem}/>
            </View>

            <ScrollView>
                {list.map(item => {
                    return (<View key={`item-${item.id}`} style={{flexDirection: 'row'}}>
                        <Text>{item.text}</Text>
                        <Button title="remove" onPress={() => removeItem(item.id)}></Button>
                    </View>)
                })}
            </ScrollView>
        </>
    )
}
