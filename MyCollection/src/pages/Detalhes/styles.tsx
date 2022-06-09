import styled from "styled-components/native";
import color from "color";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

interface BoxProps {
    marginBottom?: number
}
export const Box = styled.View<BoxProps>`
  padding: 10px;
  background-color: ${props => color(props.theme.colors.background).darken(0.3).hex()};
  align-self: stretch;
  margin: 5px 0;
  margin-bottom: ${props=>(props.marginBottom?props.marginBottom:5)}px;
  border-radius: ${props => props.theme.measures.radius}px;
`
export const Title = styled.Text`
  color: ${props=>props.theme.colors.primary};
  font-size: 16px;
`
export const Text = styled.Text`
  font-size: 16px;
  color: ${props=>props.theme.colors.secondary};
`
export const Image = styled.Image`
  width: 100%;
  height: 234px;
  resize-mode: cover;
`;
