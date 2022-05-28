import React, {useState} from 'react';
import {ErrorText, InputContainer, InputElement} from './styles';
import {TextInputProps} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import color from "color";
import {BACKGROUND_COLOR} from "../../styles/colors";

const PLACEHOLDER_COLOR = color(BACKGROUND_COLOR).lighten(0.5).hex();

interface InputProps extends TextInputProps {
    error?: string;
}

export const Input: React.FC<InputProps> = ({children, secureTextEntry = false, error, ...rest}) => {
    const [securety, setSecurety] = useState<boolean>(secureTextEntry)
    const changeSecure = () => setSecurety(sec => !sec);
    return (
        <>
            <InputContainer error={!!error}>
                <InputElement {...rest as any} secureTextEntry={securety}/>
                {secureTextEntry &&
                    <FontAwesome5 name={`eye${securety ? '-slash' : ''}`} size={26} color={PLACEHOLDER_COLOR}
                                  onPress={changeSecure}/>}
            </InputContainer>
            {!!error&&(<ErrorText>{error}</ErrorText>)}
        </>

    )
}
