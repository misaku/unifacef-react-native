import styled from "styled-components/native";
import {DefaultButton} from "../../components/BaseButton";
import {FlatList} from "react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

export const Button = styled(DefaultButton)`
  margin-top: 25px;
`

export const TitleBold = styled.Text`
  font-size: 20px;
  line-height: 20px;
  color: ${props => props.theme.colors.primary};
`

export const Title = styled.Text`
  font-size: 20px;
  line-height: 20px;
  color: ${props => props.theme.colors.secondary};
`

export const List = (styled.FlatList`

`) as unknown as typeof FlatList;
