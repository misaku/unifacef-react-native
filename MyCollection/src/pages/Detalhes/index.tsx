import {Box, Container, Image, Text, Title} from './styles';
import {DefaultButton} from "../../components/DefaultButton";
import React, {useEffect, useState} from "react";
import {Header} from "../../components/Header";
import {ScrollView} from "react-native";
import {Background} from "../../components/Background";
import {api} from "../../api";
import {ToastLayout} from "../../components/ToastLayout";
import {useToast} from "native-base";
import {useRoute} from "@react-navigation/native";
import {DetalhesScreenRouteProp} from "../../Routes/PrivateNavigation";

interface ItensProps {
    id: number;
    img: string;
    name: string;
    description: string;
    value: number;
    type: string;
}

export const Detalhes: React.FC = () => {
    const [data, setData] = useState<ItensProps|undefined>()
    const toast = useToast()
    const route = useRoute<DetalhesScreenRouteProp>();


    const change = async () => {
        await (new Promise(resolve => setTimeout(resolve, 2000)))
    }

    const getData = async ()=>{
        try{
            const response = await api.get<ItensProps>(`games/${route.params.id}`)
            if (!!response.data) setData(response.data)
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
    return (
        <Background>
            <Header title={data?.name}/>
            <ScrollView>
                {data?.img&&<Image
                    source={{uri: data?.img}}
                />}
                <Container>
                    <Box>
                        <Title>TIPO</Title>
                        <Text>{data?.type}</Text>
                    </Box>
                    <Box>
                        <Title>DESCRIÇÃO</Title>
                        <Text>{data?.description}</Text>
                    </Box>
                    <Box marginBottom={20}>
                        <Title>VALOR</Title>
                        <Text>R$ {data?.value.toFixed(2).toString().replace('.', ',')}</Text>
                    </Box>
                    <DefaultButton title={'ADICIONAR AO CARRINHO'}  onPress={change}/>
                    <DefaultButton title={'COMPRAR'}  onPress={change}/>
                </Container>
            </ScrollView>
        </Background>
    )
}
