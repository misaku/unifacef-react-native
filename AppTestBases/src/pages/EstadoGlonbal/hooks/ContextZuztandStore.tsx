import create from 'zustand';
import createContext from 'zustand/context';

import React from 'react';
interface TesteContextProps {
    contagem: number;
    list: number[];
    addCount():void;
}


const {Provider, useStore} = createContext<TesteContextProps>();

export const ProviderContexZustend: React.FC<{
    initialNumber: number;
}> = ({initialNumber, children}) => {
    return (
        <Provider
            createStore={() =>
    create<TesteContextProps>(set => ({
        contagem: initialNumber,
        list: [initialNumber],
        addCount: () => set(state => {
            const value = state.contagem + 1
            return {
                list: [...state.list, value],
                contagem: value
            }
        })
    }))
}>
    {children}
    </Provider>
);
};

export const useStoreContextZustand = useStore;

export default ProviderContexZustend;

