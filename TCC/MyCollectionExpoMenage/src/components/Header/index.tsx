import React from "react";
import styles, {BKG, BKGSafe, LeftContainer, RightContainer, Title, TitleContainer} from "./styles";
import {Ionicons} from '@expo/vector-icons';
import {PRIMARY} from "../../styles/colors";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native";

interface HeaderProps{
    title?:string;
    backFalse?:boolean;
}
export const Header: React.FC<HeaderProps> = ({children, title, backFalse=false}) => {
    const navigation = useNavigation()
    return (
        <BKGSafe>
            <SafeAreaView />
        <BKG>
            <LeftContainer>
                {!backFalse && <Ionicons name="chevron-back" size={30} color={PRIMARY} style={styles.back}
                onPress={navigation.goBack}
                />}
            </LeftContainer>
            <TitleContainer>
                {!!title?(<Title>{title}</Title>):(children)}
            </TitleContainer>
            <RightContainer></RightContainer>
        </BKG>
        </BKGSafe>
    )
}
