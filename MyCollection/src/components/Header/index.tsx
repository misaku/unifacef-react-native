import React from "react";
import styles, {BKG, LeftContainer, RightContainer, Title, TitleContainer, BKGSafe} from "./styles";
import {Ionicons} from '@expo/vector-icons';
import {PRIMARY} from "../../styles/colors";
import {SafeAreaView} from "react-native";

interface HeaderProps{
    title?:string;
}
export const Header: React.FC<HeaderProps> = ({children, title}) => {
    return (
        <BKGSafe>
            <SafeAreaView />
            <BKG>
                <LeftContainer>
                    <Ionicons name="chevron-back" size={30} color={PRIMARY} style={styles.back}/>
                </LeftContainer>
                <TitleContainer>
                    {!!title?(<Title>{title}</Title>):(children)}
                </TitleContainer>
                <RightContainer></RightContainer>
            </BKG>
        </BKGSafe>

    )
}
