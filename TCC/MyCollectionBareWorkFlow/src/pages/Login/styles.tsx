import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 30px;
  line-height: 30px;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 10px;
`
export const TitleBold = styled.Text`
  font-size: 30px;
  line-height: 30px;
  color: ${props => props.theme.colors.primary};
`
export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
