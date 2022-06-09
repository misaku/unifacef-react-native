import styled, {css} from "styled-components/native";
import color from 'color'

interface InputProps {
    hasIconRight?: boolean;
}
export const InputElement = styled.TextInput<InputProps>`
  align-self: stretch;
  flex: 1;
  background-color: ${props=>color(props.theme.colors.background).darken(0.25).hex()};
  color: ${props=> props.theme.colors.secondary};
  ${props=>props.hasIconRight&& css`
    margin-right: 20px;
  `}
`
export const InputContainer = styled.View`
  align-self: stretch;
  background-color: ${props=>color(props.theme.colors.background).darken(0.25).hex()};
  padding: 10px 20px;
  margin: 5px 0;
  min-height: 46px;
  border-radius: ${props=> props.theme.measures.radius}px;
  flex-direction: row;

`
