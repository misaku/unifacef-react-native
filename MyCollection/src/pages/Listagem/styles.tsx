import styled from "styled-components/native";
import {StyleSheet} from 'react-native'

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Box = styled.View`
  position: absolute;
  margin: 10px;
  right: 0;
  left: 0;
  z-index: 10;
`;

export const Title = styled.Text`
  font-size: 20px;
  line-height: 20px;
  color: ${props => props.theme.colors.secondary};
`
export const TitleBold = styled.Text`
  font-size: 20px;
  line-height: 20px;
  color: ${props => props.theme.colors.primary};
`
export const ItemTitle = styled.Text`
  font-size: 16px;
  line-height: 16px;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 10px;
`
export const ItemTitleBold = styled.Text`
  font-size: 18px;
  line-height: 18px;
  color: ${props => props.theme.colors.primary};
`

export const ImageCard = styled.ImageBackground`
  flex: 1;
  height: 195px;
  margin: 10px;
  border-radius: ${props=>props.theme.measures.radius}px;
  overflow: hidden;
  border-width: 3px;
  border-color: ${props=>props.theme.colors.primary};
`

export const ContainerCard = styled.View`
  flex: 1;
  background-color: rgba(0,0,0,0.90);
  align-items: center;
  justify-content: center;
  padding: 10px;
`
export default StyleSheet.create({
    flatList: {
        flex: 1
    }
})
