import style, {Box, Container, Title, TitleBold} from './styles';

import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Header} from '../../components/Header';

import {ButtonCard} from '../../components/ButtonCard';
import {ActivityIndicator, Alert, FlatList, View} from 'react-native';
import {Background} from '../../components/Background';
import {useNavigation} from '@react-navigation/native';
import {api} from '../../api';
import {useToast} from 'native-base';
import {ToastLayout} from '../../components/ToastLayout';
import {TabNavScreenNavigationProp} from '../../Routes/PrivateNavigation';
import {useCarrinhoStore} from '../../store/Carrinho.store';
import {FontAwesome5, FontAwesome} from '@expo/vector-icons';
import {useMyTheme} from '../../hooks/Theme.hooks';
import {BUTTON_CARD_HEIGHT} from '../../components/ButtonCard/styles';
import {useHistoricoStore} from '../../store/Historico.store';
import {useAuth} from '../../hooks/Auth.hooks';
import {Input} from '../../components/Input';

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
  const [pesquisa, setPesquisa] = useState<string>('')
  const [pesquisaAtiva, setPesquisaAtiva] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [list, setList] = useState<ItensProps[]>([])
  const [last, setLast] = useState<boolean>(false);

  const {theme} = useMyTheme()
  const toast = useToast()
  const {user} = useAuth()

  const loadData = useHistoricoStore(state => state.loadData)

  const getData = async (pageNumber = 1) => {
    setPage(pageNumber + 1);
    //await new Promise(success=>setTimeout(success,1000))
    if (!last || pageNumber === 1) {
      try {
        const response = await api.get('games', {
          params: {
            _page: pageNumber,
            _limit: 6
          }
        })
        if (pageNumber === 1) {
          setList(response.data)
        } else {
          setList(atual => [...atual, ...response.data])
        }

        if (response.data.length === 0) setLast(true);
      } catch (e) {
        toast.show({
          placement: 'top-right',
          render: ({id}) => {
            return ToastLayout.error({id, description: e.message, close: toast.close})
          }
        })
      }
    }


  }

  const updateData = async () => {
    if (!last) {
      setLoading(true)
      await getData(page)
      setLoading(false)
    }
  }

  const reset = async () => {
    setRefreshing(true);
    setLast(false)
    await getData(1);
    setRefreshing(false);
  }
  useEffect(() => {
    getData(1)
    if (user) {
      loadData(user.id, user.email)
    }
  }, [])

  const navigation = useNavigation<TabNavScreenNavigationProp>()
  const addItem = useCarrinhoStore(state => state.addItem)


  const addCart = useCallback((item: ItensProps) => {
    addItem({
      jogoId: item.id,
      titulo: item.name,
      valor: item.value
    })
  }, [addItem])

  const renderItem = useCallback(({item}) => (
    <ButtonCard
      item={item}
      activeId={active}
      setActive={setActive}
      addCart={addCart}
      goDetail={(id) => {
        navigation.navigate('Detalhes', {id})
      }}/>
  ), [active, setActive, addCart, navigation.navigate]);

  const filtro = useMemo(() => !!pesquisa ? list.filter(item => item.name.toUpperCase().includes(pesquisa.toUpperCase())) : list, [pesquisa, list])
  return (
    <Background>
      <Header
        letf={() => (
          <FontAwesome5 name={`search`} size={26} color={theme.colors.primary} onPress={() => setPesquisaAtiva(true)}/>
        )}
        extra={() => (
          <>
            {pesquisaAtiva && (<Box>
              <Input placeholder="Pesquisar"
                     onChangeText={setPesquisa}
                     value={pesquisa}
                     color={'#FFFFFF'}
                     right={() => (
                       <FontAwesome name={`close`}
                                    size={26}
                                    color={theme.colors.danger}
                                    style={{marginRight: -5, marginLeft: 10}}
                                    onPress={() => {
                                      setPesquisaAtiva(false)
                                      setPesquisa('')
                                    }}/>)}
                     left={() => <FontAwesome5 name={`search`} size={26} color={theme.colors.primary}
                                               style={{marginRight: 10, marginLeft: -5}}/>}
              />
            </Box>)}
          </>
        )}
        backFalse>
        <Title><TitleBold>My</TitleBold>Collection</Title>
      </Header>
      <Container>

        <FlatList<ItensProps>
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          style={style.flatList}
          numColumns={2}
          data={filtro}
          refreshing={refreshing}
          onRefresh={reset}
          onEndReached={updateData}
          ListFooterComponent={() => {
            if (loading) {
              return (<View style={{height: 60, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size={'large'} color={theme.colors.primary}/>
              </View>)
            }
            return null;
          }}
          getItemLayout={(data, index) => (
            {length: BUTTON_CARD_HEIGHT, offset: BUTTON_CARD_HEIGHT * index, index}
          )}
        />
      </Container>
    </Background>

  )
}
