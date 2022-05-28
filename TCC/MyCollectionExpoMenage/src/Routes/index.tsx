import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {OpenNavigation} from "./OpenNavigation";
import {PrivateNavigation} from "./PrivateNavigation";
import {useAuth} from "../hooks/Auth.hooks";


export const Routes: React.FC = () => {
    const {user} = useAuth()
    return (
        <NavigationContainer>
            {!!user?<PrivateNavigation />:<OpenNavigation/>}
        </NavigationContainer>
    )
}
