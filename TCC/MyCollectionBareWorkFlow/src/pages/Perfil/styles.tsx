import styled, {css} from "styled-components/native";
import color from "color";
import {DefaultButton} from "../../components/BaseButton";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`
interface InputProps {
    hasIconRight?: boolean;
}
export const Input = styled.TextInput<InputProps>`
  align-self: stretch;
  flex: 1;
  background-color: ${props=>color(props.theme.colors.background).darken(0.25).hex()};
  color: ${props=> props.theme.colors.secondary};
  ${props=>props.hasIconRight&& css`
    margin-right: 20px;
  `}
`
export const ContainerInput = styled.View`
  align-self: stretch;
  background-color: ${props=>color(props.theme.colors.background).darken(0.25).hex()};
  padding: 10px 20px;
  margin: 5px 0;
  border-radius: ${props=> props.theme.measures.radius}px;
  flex-direction: row;
  
`

export const Button = styled(DefaultButton)`
  margin-top: 25px;
`
