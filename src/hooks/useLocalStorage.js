import { useEffect, useState } from "react";

export function useLocalStorage(key, initialState){
    const [state, setState] = useState(initialState);
    
    useEffect(() => {
        const value = JSON.parse(localStorage.getItem(key));
        if(value) setState(value);
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state])

    return [state, setState];
}