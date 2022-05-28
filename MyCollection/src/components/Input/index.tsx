import React, {useMemo, useState} from 'react';
import {InputContainer, InputElement} from './styles';
import {TextInputProps} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import color from "color";
import {useMyTheme} from "../../hooks/Theme.hooks";


export const Input:React.FC<TextInputProps> = ({children,secureTextEntry=false, ...rest}) =>{
    const [securety, setSecurety] = useState<boolean>(secureTextEntry)
    const { theme } = useMyTheme()
    const PLACEHOLDER_COLOR = useMemo(()=>color(theme.colors.background).lighten(0.5).hex(), [theme]);
    const changeSecure = ()=>setSecurety(sec=>!sec);
    return (
    <InputContainer>
      <InputElement {...rest as any} secureTextEntry={securety} />
        {secureTextEntry&&<FontAwesome5 name={`eye${securety?'-slash':''}`} size={26} color={PLACEHOLDER_COLOR} onPress={changeSecure}/>}
    </InputContainer>
    )
}
