import React, {useState} from 'react';
import {InputElement, InputContainer} from './styles';
import {TextInputProps} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import color from "color";
import {BACKGROUND_COLOR} from "../../styles/colors";

const PLACEHOLDER_COLOR = color(BACKGROUND_COLOR).lighten(0.5).hex();

export const Input:React.FC<TextInputProps> = ({children,secureTextEntry=false, ...rest}) =>{
    const [securety, setSecurety] = useState<boolean>(secureTextEntry)
    const changeSecure = ()=>setSecurety(sec=>!sec);
    return (
    <InputContainer>
      <InputElement {...rest as any} secureTextEntry={securety} />
        {secureTextEntry&&<FontAwesome5 name={`eye${securety?'-slash':''}`} size={26} color={PLACEHOLDER_COLOR} onPress={changeSecure}/>}
    </InputContainer>
    )
}
