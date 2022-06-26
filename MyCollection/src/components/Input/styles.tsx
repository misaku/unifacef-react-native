import styled, {css} from "styled-components/native";
import color from 'color'

interface InputProps {
    hasIconRight?: boolean;
    color?: string;
}

export const InputElement = styled.TextInput<InputProps>`
  align-self: stretch;
  flex: 1;
  background-color: ${props => props.color?props.color: color(props.theme.colors.background).darken(0.25).hex()};
  color: ${props => props.color?props.theme.colors.primary:props.theme.colors.secondary};
  ${props => props.hasIconRight && css`
    margin-right: 20px;
  `}
`

interface InputContainerProps {
    error?: boolean;
    color?: string;
}

export const InputContainer = styled.View<InputContainerProps>`
  align-self: stretch;
  background-color: ${props => props.color?props.color: color(props.theme.colors.background).darken(0.25).hex()};
  padding: 10px 20px;
  margin: 5px 0;
  border-radius: ${props => props.theme.measures.radius}px;
  flex-direction: row;
  min-height: 46px;
  ${props => props.error && css`
    border-width: 3px;
    border-color: ${props.theme.colors.danger};
  `}
`
export const ErrorText = styled.Text`
  align-self: stretch;
  color: ${props=>props.theme.colors.danger};
`
