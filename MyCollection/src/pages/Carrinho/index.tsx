import {ActionColumn, Box, Container, ItemContainer, Text, Title, Trash} from './styles';
import {DefaultButton} from '../../components/DefaultButton';
import React, {useCallback, useMemo, useState} from 'react';
import {Header} from '../../components/Header';
import {ScrollView} from 'react-native';
import {Background} from '../../components/Background';
import {ItemCarrinho, useCarrinhoStore} from '../../store/Carrinho';
import {ToastLayout} from '../../components/ToastLayout';
import {useToast} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {CartScreenTabNavigationProps} from '../../Routes/TabsNavigation';
import {api} from '../../api';
import {useAuth} from '../../hooks/Auth.hooks';

export const Carrinho: React.FC = () => {
  const [load, setload] = useState<boolean>(false)

  const carrinho = useCarrinhoStore(state => state.carrinho)
  const removeItem = useCarrinhoStore(state => state.removeItem)
  const clear = useCarrinhoStore(state => state.clear)

  const toast = useToast();
  const navigation = useNavigation<CartScreenTabNavigationProps>()
  const {user} = useAuth();

  const mapItem = useCallback((item: ItemCarrinho) => (
    <ItemContainer>
      <ActionColumn maxWidth={71}>
        <Trash name="trash" size={24} color="black" onPress={() => removeItem(item.jogoId)}/>
      </ActionColumn>
      <Text>{item.titulo}</Text>
      <Text maxWidth={80} align={'right'}>R${item.valor.toFixed(2).replace('.', ',')}</Text>
    </ItemContainer>
  ), [])


  const sendToBuy = async () => {
    setload(true);
    try{
      if (user){
        const response =  await api.post('pedidos', {
          userId: user.id,
          userEmail: user.email,
          items: carrinho
        })
        setload(false)
        clear();
        navigation.navigate('Home');
        toast.show({
          placement: "top-right",
          render:({id})=>{
            return ToastLayout.success({id, description: 'Compras realizada com sucesso', close: toast.close})
          }

        })
      }else {
        setload(false)
        toast.show({
          placement: "top-right",
          render:({id})=>{
            return ToastLayout.error({id, description: 'Não foi possivel realizar seu pedido, por favor relogue no sistema', close: toast.close})
          }

        })
      }

    } catch (e: any){
      setload(false)
      toast.show({
        placement: "top-right",
        render:({id})=>{
          return ToastLayout.error({id, description: e.message, close: toast.close})
        }

      })
    }
  }



  const total = useMemo(() => (
    [0,
      ...carrinho.map(item => item.valor)
    ].reduce((primeiro, segundo) => primeiro + segundo)
      .toFixed(2)
      .replace('.', ',')
  ),[carrinho])
  return (
    <Background>
      <Header title={'Meu Carrinho'} backFalse/>
      <ScrollView>
        <Container>
          <Box marginBottom={10}>
            <Title maxWidth={60}>AÇÃO</Title>
            <Title>TITULO</Title>
            <Title maxWidth={80} align={'right'}>VALOR</Title>
          </Box>
          {carrinho.map(mapItem)}
          <ItemContainer borderTop>
            <Title noFlex>TOTAL</Title>
            <Text marginLeft={10} noFlex>R${total}</Text>
          </ItemContainer>

        </Container>

      </ScrollView>
      <Container>
        <DefaultButton title={'FINALIZAR COMPRA'} loading={load} onPress={sendToBuy}/>
      </Container>

    </Background>
  )
}
