import {Container, List, Title, TitleBold} from "./styles";
import {DARKBACKGROUND} from "../../styles/colors";
import color from "color";
import {useEffect, useState} from "react";
import {Header} from "../../components/Header";
import {Text, View} from "react-native";
import {GameTypes} from "./game.types";
import {api} from "../../api";

const PLACEHOLDER_COLOR = color(DARKBACKGROUND).lighten(0.5).hex();
const PLACEHOLDER_COLOR_DARKEN = color(DARKBACKGROUND).darken(0.25).hex();

export const Catalogo: React.FC = () => {
    const [data, setData] = useState<GameTypes[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const getData = async ()=>{
        try{
            console.log('response?')
            const response = await api.get('games')
            setData(response.data)
        }catch (erro){

        }
    }
    useEffect(()=>{
               getData();
    },[])

    return (
        <>
            <Header>
                <Title><TitleBold>My</TitleBold>Collection</Title>
            </Header>
            <Container>
                <List<GameTypes>
                    data={data}
                    keyExtractor={item=>`item-${item.id}`}
                    renderItem={({item})=><Text>{item.name}</Text>}
                />
                {/*<Button title={'EDITAR'} loading={loading} onPress={sendForm}/>*/}
            </Container>
        </>

    )
}
