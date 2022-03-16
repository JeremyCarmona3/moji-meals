import {useContext, createContext, useState} from 'react';

const initialStates = {
     theme:'light',
     setTheme:()=>{},
  
}

const SortedData = {
    datalist:[],
    setDataList:()=>{},
 
}

const CaloStates ={
    sbc:false,
    setSBC:()=>{}, 
}


const CarboStates ={
    carbo:false,
    setCar:()=>{},
}

const TotalSugarStates ={
    tsugar:false,
    setTSugar:()=>{},
}

const MyContextdata = createContext(SortedData);
const MyContext = createContext(initialStates);
const MyContext1 = createContext(CaloStates);
const MyContext2 = createContext(CarboStates);
const MyContext3 = createContext(TotalSugarStates);

export default function AppProvider({children}){
    const [theme,setTheme] = useState('light')
    const [datalist,setDataList] = useState([])
    const [sbc,setSBC] = useState([false,"Calories (kcal)"])
    const [carbo,setCar] = useState([false,"Carbohydrates (g)"])
    const [tsugar,setTSugar] = useState([false,"Total Sugar (g)"])


    return <MyContext.Provider value={{theme,setTheme}}>
            <MyContextdata.Provider value ={{datalist,setDataList}}>
            <MyContext1.Provider value ={{sbc,setSBC}}>
            <MyContext2.Provider value={{carbo,setCar}}>
            <MyContext3.Provider value={{tsugar,setTSugar}}>
               {children}
            </MyContext3.Provider>    
            </MyContext2.Provider>
            </MyContext1.Provider>
            </MyContextdata.Provider>
    </MyContext.Provider>
}


  export const useTheme = () =>{
    return useContext(MyContext);
  }

  export const useData = () =>{
    return useContext(MyContextdata);
  }
  
  export const useCalo = () =>{
    return useContext(MyContext1);
  }

  export const useNut = () =>{
    return useContext(MyContext2);
  }


  export const useTSugar = () =>{
    return useContext(MyContext3);
  }
