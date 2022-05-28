import React from "react";
import {PrivateNavigation} from "./PrivateNavigation";
import {OpenNavigation} from "./OpenNavigation";
import {useAuth} from "../hooks/Auth.hooks";

export const Routes: React.FC =()=>{
    const {user} = useAuth()
    return (!!user?<PrivateNavigation />:<OpenNavigation/>)
}
