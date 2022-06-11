import style, {Container, Title, TitleBold} from './styles';

import React, {useCallback, useEffect, useState} from 'react';
import {Header} from "../../components/Header";

import {ButtonCard} from "../../components/ButtonCard";
import {ActivityIndicator, FlatList, View} from 'react-native';
import {Background} from "../../components/Background";
import {useNavigation} from "@react-navigation/native";
import {api} from "../../api";
import {useToast} from "native-base";
import {ToastLayout} from "../../components/ToastLayout";
import {TabNavScreenNavigationProp} from "../../Routes/PrivateNavigation";
import {useCarrinhoStore} from '../../store/Carrinho';
import {useMyTheme} from '../../hooks/Theme.hooks';
import {BUTTON_CARD_HEIGHT} from '../../components/ButtonCard/styles';


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
    const [page, setPage] = useState<number>(1)
    const [refreshing, setRefreshing] = useState<boolean>(false)
    const [list, setList] = useState<ItensProps[]>([])
    const [last, setLast] = useState<boolean>(false)
    const toast = useToast()
    const {theme} = useMyTheme()
    const getData = async (pageNumber=1)=>{
        setPage(pageNumber + 1);
        if(!last||pageNumber===1){
            try{
                //await (new Promise(resolve => setTimeout(resolve,1000)))
                const response = await api.get('games',{
                    params:{
                        _page:pageNumber,
                        _limit: 2,
                    }
                })
                if(pageNumber===1){
                    setList(response.data)
                } else {
                    setList(atual=>[...atual,...response.data])
                }

                if(response.data.length===0) setLast(true)
            } catch (e) {
                toast.show({
                    placement: "top-right",
                    render:({id})=>{
                        return ToastLayout.error({id, description: e.message, close: toast.close})
                    }
                })
            }
        }


    }

    const updateData = async ()=>{
        if(!last){
            await getData(page)
        }
    }

    const reset = async ()=>{
        setRefreshing(true);
        setLast(false)
        await getData(1);
        setRefreshing(false);
    }
    useEffect(()=>{
        getData(1)
    },[])

    const navigation = useNavigation<TabNavScreenNavigationProp>()
    const addItem = useCarrinhoStore(state=> state.addItem)
    const addCart = useCallback((item:ItensProps)=>() => {
        addItem({
            jogoId: item.id,
            titulo: item.name,
            valor: item.value
        })
    },[addItem])

    const renderItem = useCallback( ({item}) => (
      <ButtonCard
        item={item}
        activeId={active}
        setActive={setActive}
        addCart={addCart(item)}
        goDetail={(id) => {
            navigation.navigate('Detalhes', {id})
        }}/>
    ),[active, addCart,setActive])

    return (
        <Background>
            <Header backFalse>
                <Title><TitleBold>My</TitleBold>Collection</Title>
            </Header>
            <Container>
                <FlatList<ItensProps>
                    renderItem={renderItem}
                    keyExtractor={(item) => `${item.id}`}
                    style={style.flatList}
                    onRefresh={reset}
                    refreshing={refreshing}
                    onEndReached={updateData}
                    onEndReachedThreshold={0.01}
                    ListFooterComponent={()=>{
                        if(!last){
                            return (<View style={{ height: 60, width: '100%', justifyContent: 'center', alignItems:'center'}}>
                                <ActivityIndicator size={'large'} color={theme.colors.primary}/>
                            </View>)
                        }
                        return null;
                    }}
                    getItemLayout={(data, index) => (
                      {length: BUTTON_CARD_HEIGHT, offset: BUTTON_CARD_HEIGHT * index, index}
                    )}
                    numColumns={2}
                    data={list}
                />
            </Container>
        </Background>

    )
}
