import React, {useMemo, useState} from "react";
import styles, {BKG, BKGSafe, LeftContainer, RightContainer, Title, TitleContainer} from "./styles";
import {Ionicons} from '@expo/vector-icons';

import {SafeAreaView} from "react-native";
import {useMyTheme} from "../../hooks/Theme.hooks";
import {Switch} from "../../pages/Login/styles";
import color from "color";
import {useNavigation} from "@react-navigation/native";

interface HeaderProps{
    title?:string;
    backFalse?:boolean;
    left?: ()=> React.ReactNode;
    extra?: ()=> React.ReactNode;
}
export const Header: React.FC<HeaderProps> = ({children, title, backFalse=false, left, extra}) => {
   const { theme, changeTheme } = useMyTheme()
    const [dark, setDark] = useState<boolean>(true)
    const changeDark = () =>{
        changeTheme();
        setDark(current=>!current)
    }
    const PLACEHOLDER_COLOR = useMemo(()=>color(theme.colors.background).lighten(0.5).hex(),[theme]);
    const PLACEHOLDER_COLOR_DARKEN = useMemo(()=>color(theme.colors.background).darken(0.25).hex(),[theme]);

    const navigation = useNavigation<any>()
    return (
        <BKGSafe>
            <SafeAreaView />
            <BKG>
                {extra&&extra()}
                <LeftContainer>
                    {!backFalse&&navigation.canGoBack()&&(<Ionicons name="chevron-back" size={30} color={theme.colors.primary} style={styles.back} onPress={navigation.goBack}/>)}
                {left&&left()}
                </LeftContainer>
                <TitleContainer>
                    {!!title?(<Title>{title}</Title>):(children)}
                </TitleContainer>
                <RightContainer>
                    <Switch
                        onChange={changeDark}
                        value={dark}
                        thumbColor={theme.colors.secondary}
                        trackColor={{true: theme.colors.primary, false: PLACEHOLDER_COLOR_DARKEN}}
                    />
                </RightContainer>
            </BKG>
        </BKGSafe>

    )
}
