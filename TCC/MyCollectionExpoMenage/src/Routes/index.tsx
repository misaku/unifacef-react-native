import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {OpenNavigation} from "./OpenNavigation";
import {PrivateNavigation} from "./PrivateNavigation";

export const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            {/*<OpenNavigation/>*/}
            <PrivateNavigation />
        </NavigationContainer>
    )
}
