import React, { useRef, createContext, useEffect, useReducer, useState, useContext } from 'react'
import { Model, Store } from 'type-r'
import { StoreContext, useModel, useGlobalModel } from './hooks'
import { any } from 'prop-types';

export function exposeStore( type : typeof Store, Component : Function ){
    return props => {
        const store = useModel( type );
        
        return (
            <StoreContext.Provider value={store}>
                <Component store={ store } {...props} />
            </StoreContext.Provider>
        );
    }
}

export function exposeGlobalStore( ref : Store, Component : Function ){
    useGlobalModel( ref );

    return props => {
        return (
            <StoreContext.Provider value={ref}>
                <Component store={ ref } {...props} />
            </StoreContext.Provider>
        );
    }
}