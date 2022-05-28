import React, {createContext, useContext, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface UserProps {
    email: string;
    id: number;
}

interface AuthContextProps {
    user?: UserProps;
    getSaveLogin():Promise<void>;
    logout():Promise<void>;
    login(user: UserProps, savelogin:boolean):Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<UserProps | undefined>();
    const storeSaveLogin = async (user?:UserProps) => {
        try {
            const jsonValue = JSON.stringify({user})
            await AsyncStorage.setItem('@myCollection/saveLogin', jsonValue)
        } catch (e) {
            // saving error
        }
    }
    const getSaveLogin:()=>Promise<void> = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@myCollection/saveLogin')
            if (jsonValue != null){
                const data =  JSON.parse(jsonValue)
                setUser(data.user)
            }
        } catch(e) {

        }
    }

    const login = async (user:UserProps, saveLogin:boolean)=>{
        await storeSaveLogin(saveLogin?user:undefined)
        setUser(user)
    }
    const logout = async ()=>{
        await storeSaveLogin(undefined)
        setUser(undefined)
    }
    return <AuthContext.Provider value={{user, login, getSaveLogin, logout}}>{children}</AuthContext.Provider>
}

export const useAuth: () => AuthContextProps = () => {
    return useContext<AuthContextProps>(AuthContext)
}
