import {useContext, createContext, useState} from 'react';

const initialStates = {
     theme:'light',
     setTheme:()=>{},
  
}

const SortedData = {
    datalist:[],
    setDataList:()=>{},
 
}

const TotalZincStates ={
    totzinc:false,
    setTotzinc:()=>{}, 
}

const TotalSodiumStates ={
    totsodium:false,
    setTotsodium:()=>{}, 
}

const TotalSelenStates ={
    totselen:false,
    setTotselen:()=>{}, 
}

const TotalPhosStates ={
    totphos:false,
    setTotphos:()=>{}, 
}

const TotalMangStates ={
    totmang:false,
    setTotmang:()=>{}, 
}

const TotalMagStates ={
    totmag:false,
    setTotmag:()=>{}, 
}

const TotalIronStates ={
    totiron:false,
    setTotiron:()=>{}, 
}

const TotalCopperStates ={
    totcopper:false,
    setTotcopper:()=>{}, 
}

const TotalCholineStates ={
    totcholine:false,
    setTotcholine:()=>{}, 
}

const TotalPantoStates ={
    totpanto:false,
    setTotpanto:()=>{}, 
}

const TotalFolateStates ={
    totfolate:false,
    setTotfolate:()=>{}, 
}

const TotalNiaStates ={
    totnia:false,
    setTotnia:()=>{}, 
}

const TotalRiboStates ={
    totribo:false,
    setTotribo:()=>{}, 
}

const TotalThiaStates ={
    totthia:false,
    setTotthia:()=>{}, 
}

const TotalVitkStates ={
    totvitk:false,
    setTotvitk:()=>{}, 
}

const TotalViteStates ={
    totvite:false,
    setTotvite:()=>{}, 
}

const TotalVitdStates ={
    totvitd:false,
    setTotvitd:()=>{}, 
}

const TotalVitcStates ={
    totvitc:false,
    setTotvitc:()=>{}, 
}

const TotalVitb12States ={
    totvitb12:false,
    setTotvitb12:()=>{}, 
}

const TotalVitb6States ={
    totvitb6:false,
    setTotvitb6:()=>{}, 
}

const TotalVitaStates ={
    totvita:false,
    setTotvita:()=>{}, 
}

const TotalPotStates ={
    totpot:false,
    setTotpot:()=>{}, 
}

const TotalSodStates ={
    totsod:false,
    setTotsod:()=>{}, 
}

const TotalCalcStates ={
    totcalc:false,
    setTotcalc:()=>{}, 
}

const TotalCholStates ={
    totchol:false,
    setTotchol:()=>{}, 
}

const TotalFibStates ={
    totfib:false,
    setTotfib:()=>{}, 
}

const TotalFatStates ={
    totfat:false,
    setTotfat:()=>{}, 
}

const ProStates ={
    pro:false,
    setPro:()=>{}, 
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

//alicia additions

const SaturatedFatsStates = {
  totsfat: false,
  setTotsfat: ()=>{},
}

const MonounsaturatedFatsStates = {
  totmfat: false,
  setTotmfat: ()=>{},
}

const PolyunsaturatedFatsStates = {
  totpfat: false,
  setTotpfat: ()=>{},
}

//end of alicia additions

const MyContextdata = createContext(SortedData);
const MyContext = createContext(initialStates);
const MyContext1 = createContext(CaloStates);
const MyContext2 = createContext(CarboStates);
const MyContext3 = createContext(TotalSugarStates);
const MyContext4 = createContext(ProStates);
const MyContext5 = createContext(TotalFatStates);
const MyContext6 = createContext(TotalFibStates);
const MyContext7 = createContext(TotalCholStates);
const MyContext8 = createContext(TotalCalcStates);
const MyContext9 = createContext(TotalSodStates);
const MyContext10 = createContext(TotalPotStates);
const MyContext11 = createContext(TotalVitaStates);
const MyContext12 = createContext(TotalVitb6States);
const MyContext13 = createContext(TotalVitb12States);
const MyContext14 = createContext(TotalVitcStates);
const MyContext15 = createContext(TotalVitdStates);
const MyContext16 = createContext(TotalViteStates);
const MyContext17 = createContext(TotalVitkStates);
const MyContext18 = createContext(TotalThiaStates);
const MyContext19 = createContext(TotalRiboStates);
const MyContext20 = createContext(TotalNiaStates);
const MyContext21 = createContext(TotalFolateStates);
const MyContext22 = createContext(TotalPantoStates);
const MyContext23 = createContext(TotalCholineStates);
const MyContext24 = createContext(TotalCopperStates);
const MyContext25 = createContext(TotalIronStates);
const MyContext26 = createContext(TotalMagStates);
const MyContext27 = createContext(TotalMangStates);
const MyContext28 = createContext(TotalPhosStates);
const MyContext29 = createContext(TotalSelenStates);
const MyContext30 = createContext(TotalSodiumStates);
const MyContext31 = createContext(TotalZincStates);
const MyContext32 = createContext(SaturatedFatsStates);
const MyContext33 = createContext(MonounsaturatedFatsStates);
const MyContext34 = createContext(PolyunsaturatedFatsStates);

export default function AppProvider({children}){
    const [theme,setTheme] = useState('light')
    const [datalist,setDataList] = useState([])
    const [sbc,setSBC] = useState([false,"Calories (kcal)"])
    const [carbo,setCar] = useState([false,"Carbohydrates (g)"])
    const [tsugar,setTSugar] = useState([false,"Total Sugar (g)"])
    const [pro, setPro] = useState([false, "Protein (g)"])
    const [totfat, setTotfat] = useState([false, "Total Fat (g)"])
    const [totfib, setTotfib] = useState([false, "Total Fiber g"])
    const [totchol, setTotchol] = useState([false, "Cholesterol mg"])
    const [totcalc, setTotcalc] = useState([false, "Calcium g"])
    const [totsod, setTotsod] = useState([false, "Sodium g"])
    const [totpot, setTotpot] = useState([false, "Potassium g"])
    const [totvita, setTotvita] = useState([false, "Vitamin A IU"])
    const [totvitb6, setTotvitb6] = useState([false, "Vitamin B6 mg"])
    const [totvitb12, setTotvitb12] = useState([false, "Vitamin B12 ug"])
    const [totvitc, setTotvitc] = useState([false, "Vitamin C mg"])
    const [totvitd, setTotvitd] = useState([false, "Vitamin D IU"])
    const [totvite, setTotvite] = useState([false, "Vitamin E IU"])
    const [totvitk, setTotvitk] = useState([false, "Vitamin K ug"])
    const [totthia, setTotthia] = useState([false, "Thiamin mg"])
    const [totribo, setTotribo] = useState([false, "Riboflavin mg"])
    const [totnia, setTotnia] = useState([false, "Niacin mg"])
    const [totfolate, setTotfolate] = useState([false, "Folate ug"])
    const [totpanto, setTotpanto] = useState([false, "Pantothenic Acid mg"])
    const [totcholine, setTotcholine] = useState([false, "Choline mg"])
    const [totcopper, setTotcopper] = useState([false, "Copper mg"])
    const [totiron, setTotiron] = useState([false, "Iron mg"])
    const [totmag, setTotmag] = useState([false, "Magnesium mg"])
    const [totmang, setTotmang] = useState([false, "Manganese mg"])
    const [totphos, setTotphos] = useState([false, "Phosphorus g"])
    const [totselen, setTotselen] = useState([false, "Selenium ug"])
    const [totsodium, setTotsodium] = useState([false, "Sodium g"])
    const [totzinc, setTotzinc] = useState([false, "Zinc mg"])
    const [totsfat, setTotsfat] = useState([false, "Saturated Fat g"])
    const [totmfat, setTotmfat] = useState([false, "Monounsaturated Fat g"])
    const [totpfat, setTotpfat] = useState([false, "Polyunsaturated Fat g"])


    return <MyContext.Provider value={{theme,setTheme}}>
            <MyContextdata.Provider value ={{datalist,setDataList}}>
            <MyContext1.Provider value ={{sbc,setSBC}}>
            <MyContext2.Provider value={{carbo,setCar}}>
            <MyContext3.Provider value={{tsugar,setTSugar}}>
            <MyContext4.Provider value={{pro,setPro}}>
            <MyContext5.Provider value={{totfat,setTotfat}}>
            <MyContext6.Provider value={{totfib,setTotfib}}>
            <MyContext7.Provider value={{totchol,setTotchol}}>
            <MyContext8.Provider value={{totcalc,setTotcalc}}>
            <MyContext9.Provider value={{totsod,setTotsod}}>
            <MyContext10.Provider value={{totpot,setTotpot}}>
            <MyContext11.Provider value={{totvita,setTotvita}}>
            <MyContext12.Provider value={{totvitb6,setTotvitb6}}>
            <MyContext13.Provider value={{totvitb12,setTotvitb12}}>
            <MyContext14.Provider value={{totvitc,setTotvitc}}>
            <MyContext15.Provider value={{totvitd,setTotvitd}}>
            <MyContext16.Provider value={{totvite,setTotvite}}>
            <MyContext17.Provider value={{totvitk,setTotvitk}}>
            <MyContext18.Provider value={{totthia,setTotthia}}>
            <MyContext19.Provider value={{totribo,setTotribo}}>
            <MyContext20.Provider value={{totnia,setTotnia}}>
            <MyContext21.Provider value={{totfolate,setTotfolate}}>
            <MyContext22.Provider value={{totpanto,setTotpanto}}>
            <MyContext23.Provider value={{totcholine,setTotcholine}}>
            <MyContext24.Provider value={{totcopper,setTotcopper}}>
            <MyContext25.Provider value={{totiron,setTotiron}}>
            <MyContext26.Provider value={{totmag,setTotmag}}>
            <MyContext27.Provider value={{totmang,setTotmang}}>
            <MyContext28.Provider value={{totphos,setTotphos}}>
            <MyContext29.Provider value={{totselen,setTotselen}}>
            <MyContext30.Provider value={{totsodium,setTotsodium}}>
            <MyContext31.Provider value={{totzinc,setTotzinc}}>  
            <MyContext32.Provider value={{totsfat,setTotsfat}}>
            <MyContext33.Provider value={{totmfat,setTotmfat}}>
            <MyContext34.Provider value={{totpfat,setTotpfat}}>
               {children}
            </MyContext34.Provider>   
            </MyContext33.Provider>
            </MyContext32.Provider>   
            </MyContext31.Provider>
            </MyContext30.Provider>
            </MyContext29.Provider>
            </MyContext28.Provider>
            </MyContext27.Provider>
            </MyContext26.Provider>
            </MyContext25.Provider>
            </MyContext24.Provider>
            </MyContext23.Provider>
            </MyContext22.Provider>
            </MyContext21.Provider>
            </MyContext20.Provider>
            </MyContext19.Provider>
            </MyContext18.Provider>
            </MyContext17.Provider>
            </MyContext16.Provider>
            </MyContext15.Provider>
            </MyContext14.Provider>
            </MyContext13.Provider>
            </MyContext12.Provider>
            </MyContext11.Provider>
            </MyContext10.Provider>
            </MyContext9.Provider>
            </MyContext8.Provider>
            </MyContext7.Provider>
            </MyContext6.Provider>
            </MyContext5.Provider>
            </MyContext4.Provider>
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

  export const usePro = () =>{
    return useContext(MyContext4);
  }

  export const useTotfat = () =>{
    return useContext(MyContext5);
  }
  export const useTotfib = () =>{
    return useContext(MyContext6);
  }

  export const useTotchol = () =>{
    return useContext(MyContext7);
  }

  export const useTotcalc = () =>{
    return useContext(MyContext8);
  }

  export const useTotsod = () =>{
    return useContext(MyContext9);
  }

  export const useTotpot = () =>{
    return useContext(MyContext10);
  }

  export const useTotvita = () =>{
    return useContext(MyContext11);
  }

  export const useTotvitb6 = () =>{
    return useContext(MyContext12);
  }

  export const useTotvitb12 = () =>{
    return useContext(MyContext13);
  }

  export const useTotvitc = () =>{
    return useContext(MyContext14);
  }

  export const useTotvitd = () =>{
    return useContext(MyContext15);
  }

  export const useTotvite = () =>{
    return useContext(MyContext16);
  }

  export const useTotvitk = () =>{
    return useContext(MyContext17);
  }

  export const useTotthia = () =>{
    return useContext(MyContext18);
  }

  export const useTotribo = () =>{
    return useContext(MyContext19);
  }

  export const useTotnia = () =>{
    return useContext(MyContext20);
  }

  export const useTotfolate = () =>{
    return useContext(MyContext21);
  }

  export const useTotpanto = () =>{
    return useContext(MyContext22);
  }

  export const useTotcholine = () =>{
    return useContext(MyContext23);
  }

  export const useTotcopper = () =>{
    return useContext(MyContext24);
  }

  export const useTotiron = () =>{
    return useContext(MyContext25);
  }

  export const useTotmag = () =>{
    return useContext(MyContext26);
  }

  export const useTotmang = () =>{
    return useContext(MyContext27);
  }

  export const useTotphos = () =>{
    return useContext(MyContext28);
  }

  export const useTotselen = () =>{
    return useContext(MyContext29);
  }

  export const useTotsodium = () =>{
    return useContext(MyContext30);
  }

  export const useTotzinc = () =>{
    return useContext(MyContext31);
  }

  export const useTotsfat = () =>{
    return useContext(MyContext32);
  }

  export const useTotmfat = () =>{
    return useContext(MyContext33);
  }

  export const useTotpfat = () =>{
    return useContext(MyContext34);
  }