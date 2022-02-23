import {useContext, createContext, useState} from 'react';

const initialStates = {
    theme:'light',
    setTheme:()=>{}
}

const MyContext = createContext(initialStates);

export default function AppProvider({children}){
    const [theme,setTheme] = useState('light')
  
    return <MyContext.Provider value={{theme,setTheme}}>
        {children}
    </MyContext.Provider>
}


export const useTheme = () =>{
    return useContext(MyContext);
  }
