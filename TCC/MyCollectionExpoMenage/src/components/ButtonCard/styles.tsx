import styled from "styled-components/native";

export const BUTTON_CARD_HEIGHT = 195;
export const Container = styled.View`
  flex: 1;
  height: ${BUTTON_CARD_HEIGHT}px;
  margin: 10px;
`;

export const ContainerButton = styled.TouchableWithoutFeedback`
  width: 100%;
  height: ${BUTTON_CARD_HEIGHT}px;
`;

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
  height: ${BUTTON_CARD_HEIGHT}px;
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
