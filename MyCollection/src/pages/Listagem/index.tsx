import style, {Container, Title, TitleBold} from './styles';

import React, {useEffect, useState} from "react";
import {Header} from "../../components/Header";

import {ButtonCard} from "../../components/ButtonCard";
import {FlatList} from "react-native";
import {Background} from "../../components/Background";
import {useNavigation} from "@react-navigation/native";
import {api} from "../../api";
import {useToast} from "native-base";
import {ToastLayout} from "../../components/ToastLayout";


interface ItensProps {
    id: number;
    img: string;
    name: string;
    description: string;
    value: number;
    type: string;
}

export const Listagem: React.FC = () => {
    const [active, setActive] = useState<number>()
    const [list, setList] = useState<ItensProps[]>([])
    const toast = useToast()
    const getData = async ()=>{
        try{
            const response = await api.get('games')
            setList(response.data)
        }catch (e) {
            toast.show({
                placement: "top-right",
                render:({id})=>{
                    return ToastLayout.error({id, description: e.message, close: toast.close})
                }
            })
        }

    }
    useEffect(()=>{
        getData()
    },[])

    const navigation = useNavigation<any>()
    return (
        <Background>
            <Header backFalse>
                <Title><TitleBold>My</TitleBold>Collection</Title>
            </Header>
            <Container>
                <FlatList<ItensProps>
                    renderItem={({item}) => (
                        <ButtonCard
                            item={item}
                            activeId={active}
                            setActive={setActive}
                            addCart={() => {
                            }}
                            goDetail={(id) => {
                               navigation.navigate('Detalhes', {id})
                        }}/>
                    )}
                    keyExtractor={(item) => `${item.id}`}
                    style={style.flatList}
                    numColumns={2}
                    data={list}
                />
            </Container>
        </Background>

    )
}
