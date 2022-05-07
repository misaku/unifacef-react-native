import React from "react";
import {BKG} from "./styles";
export const BaseContainer: React.FC = ({children}) => {
    return (
        <BKG>
            {children}
        </BKG>
    )
}
