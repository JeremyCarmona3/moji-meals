import {useContext, createContext, useState} from 'react';

//the variables you want to provide to all the pages/components wrapped around this provider
const initialStates = {
    theme:'light',
    setTheme:()=>{}
}

const MyContext = createContext(initialStates);

export default function AppProvider({children}){
    const [theme,setTheme] = useState('light')
    //children all the pages/components insider this provider

    //put in the variables you want to share
    return <MyContext.Provider value={{theme,setTheme}}>
        {children}
    </MyContext.Provider>
}

//use the Context to create Hooks like useTheme
export const useTheme = () =>{
    return useContext(MyContext);
  }
