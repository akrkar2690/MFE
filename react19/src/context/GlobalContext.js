import React, { createContext, useContext, useState } from 'react';
import useGlobal from '../hooks/useGlobal';

const GlobalContext = createContext(['#00FFFF', () => {}]);

export const GlobalContextProvider = ({children}) => {
    const {react18, setReact18} = useGlobal();
    return (
        <GlobalContext.Provider value={useState('#00FFFF')}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>  useContext(GlobalContext);