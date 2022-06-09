import React from 'react';
import {BackgroundContainer} from './styles';

export const Background:React.FC = ({children}) =>{
    return (
    <BackgroundContainer>
      {children}
    </BackgroundContainer>
    )
}