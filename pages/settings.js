import React, { useState } from 'react'
import ax from 'axios';
import Button from '../comps/buttons/Button'
import NavBar from '../comps/global/Navbar'
import Toggle from '../comps/buttons/Toggle'

import { useTheme, 
  useNut,
  useTSugar,
  useCalo,
  useData, 
  usePro, 
  useTotfat, 
  useTotfib,
  useTotchol,
  useTotcalc,
  useTotsod,
  useTotpot,
  useTotvita,
  useTotvitb6,
  useTotvitb12,
  useTotvitc,
  useTotvitd,
  useTotvite,
  useTotvitk,
  useTotthia,
  useTotribo,
  useTotnia,
  useTotfolate,
  useTotpanto,
  useTotcholine,
  useTotcopper,
  useTotiron,
  useTotmag,
  useTotmang,
  useTotphos,
  useTotselen,
  useTotsodium,
  useTotzinc,
  useTotsfat,  
  useTotmfat, 
  useTotpfat
} from "../utils/provider";

import {bgcolor,textcolor} from '../comps/variable'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import ToggleSwitch from '../comps/buttons/ToggleSwitch';


const Cont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  background-color:${props=>props.background};
`;

const BtnRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5px;
  padding: 0 5%;
`;

const Headers = styled.p`
  padding: 0 5%;
  font-size: 24px;
  color:${props=>props.color};
`;


export default function Settings({
  bg = bgcolor,
  color = textcolor
}) {
  const {theme} =useTheme();
  const {setTheme} = useTheme();
  const {datalist,setDataList} =useData();
  const {sbc,setSBC} =useCalo();
  const {carbo,setCar} =useNut();
  const {tsugar,setTSugar} = useTSugar();
  const {pro, setPro} = usePro();
  const {totfat, setTotfat} = useTotfat();
  const {totfib, setTotfib} = useTotfib();
  const {totchol, setTotchol} = useTotchol();
  const {totcalc, setTotcalc} = useTotcalc();
  const {totsod, setTotsod} = useTotsod();
  const {totpot, setTotpot} = useTotpot();
  const {totvita, setTotvita} = useTotvita();
  const {totvitb6, setTotvitb6} = useTotvitb6();
  const {totvitb12, setTotvitb12} = useTotvitb12();
  const {totvitc, setTotvitc} = useTotvitc();
  const {totvitd, setTotvitd} = useTotvitd();
  const {totvite, setTotvite} = useTotvite();
  const {totvitk, setTotvitk} = useTotvitk();
  const {totthia, setTotthia} = useTotthia();
  const {totribo, setTotribo} = useTotribo();
  const {totnia, setTotnia} = useTotnia();
  const {totfolate, setTotfolate} = useTotfolate();
  const {totpanto, setTotpanto} = useTotpanto();
  const {totcholine, setTotcholine} = useTotcholine();
  const {totcopper, setTotcopper} = useTotcopper();
  const {totiron, setTotiron} = useTotiron();
  const {totmag, setTotmag} = useTotmag();
  const {totmang, setTotmang} = useTotmang();
  const {totphos, setTotphos} = useTotphos();
  const {totselen, setTotselen} = useTotselen();
  const {totsodium, setTotsodium} = useTotsodium();
  const {totzinc, setTotzinc} = useTotzinc();
  const {totsfat, setTotsfat} = useTotsfat();
  const {totmfat, setTotmfat} = useTotmfat();
  const {totpfat, setTotpfat} = useTotpfat();

  const [data,setData] =useState([]) 
 // const [sbc, setSBC] = useState(false)
  const [sbr_type,setSBRType] =useState('asc')

  const Switch =(async()=>{
        setSBRType(sbr_type === 'asc' ? 'desc':'asc');
        setSBC([!sbc,"Calories (kcal)"]);
        console.log("async call");
        const res = await ax.get('../api/emoji',{
          params:{
            nuttype:sbc[1],
            sort_type:sbr_type
          }
        })

        setDataList(res.data)
        console.log(res.data)
        setData(res.data)
        console.log(datalist)
        // console.log(data)
    })



  const SwitchTotfib =(async()=>{
    setSBRType(sbr_type === 'asc' ? 'desc':'asc');
    setTotfib([!totfib,"Total Fiber g"]);
    console.log(totfib);
    const res = await ax.get('../api/emoji',{
      params:{
        nuttype:totfib[1],
        sort_type:sbr_type
      }
    })
    setDataList(res.data)
    console.log(res.data)
    setData(res.data)
    // console.log(data)
}) 


const SwitchTotchol =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotchol([!totchol,"Cholesterol mg"]);
  console.log(totchol);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totchol[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotcalc =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotcalc([!totcalc,"Calcium g"]);
  console.log(totcalc);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totcalc[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotsod =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotsod([!totsod,"Sodium g"]);
  console.log(totsod);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totsod[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotpot =(async()=>{
  setTotpot(sbr_type === 'asc' ? 'desc':'asc');
  setCar([!totpot,"Potassium g"]);
  console.log(totpot);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totpot[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotvita =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotvita([!totvita,"Vitamin A IU"]);
  console.log(totvita);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totvita[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 



const SwitchTotb6 =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotvitb6([!totvitb6,"Vitamin B6 mg"]);
  console.log(totvitb6);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totvitb6[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotb12 =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotvitb12([!totvitb12,"Vitamin B12 ug"]);
  console.log(totvitb12);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totvitb12[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotvitc =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotvitc([!totvitc,"Vitamin C mg"]);
  console.log(totvitc);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totvitc[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotvitd =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotvitd([!totvitd,"Vitamin D IU"]);
  console.log(totvitd);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totvitd[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotvite =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotvite([!totvite,"Vitamin E IU"]);
  console.log(totvite);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totvite[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotvitk =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotvitk([!totvitk,"Vitamin K ug"]);
  console.log(totvitk);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totvitk[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotthia =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotthia([!totthia,"Thiamin mg"]);
  console.log(totthia);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totthia[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotribo =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotribo([!totribo,"Riboflavin mg"]);
  console.log(totribo);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totribo[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotnia =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotnia([!totnia,"Niacin mg"]);
  console.log(totnia);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totnia[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotfolate =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotfolate([!totfolate,"Folate ug"]);
  console.log(totfolate);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totfolate[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotpanto =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotpanto([!totpanto,"Pantothenic Acid mg"]);
  console.log(totpanto);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totpanto[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotcholine =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotcholine([!totcholine,"Choline mg"]);
  console.log(totcholine);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totcholine[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotcopper =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotcopper([!totcopper,"Copper mg"]);
  console.log(totcopper);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totcopper[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotiron =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotiron([!totiron,"Iron mg"]);
  console.log(totiron);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totiron[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotmag =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotmag([!totmag,"Magnesium mg"]);
  console.log(totmag);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totmag[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotmang =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotmang([!totmang,"Manganese mg"]);
  console.log(totmang);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totmang[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotphos =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotphos([!totphos,"Phosphorus g"]);
  console.log(totphos);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totphos[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 

const SwitchTotselen =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotselen([!totselen,"Selenium ug"]);
  console.log(totselen);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totselen[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const SwitchTotsodium =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotsodium([!totsodium,"Sodium g"]);
  console.log(totsodium);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totsodium[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 

const SwitchTotzinc =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotzinc([!totzinc,"Zinc mg"]);
  console.log(totzinc);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totzinc[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 


const Switchsfat =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotsfat([!totsfat,"Saturated Fat g"]);
  console.log(totsfat);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totsfat[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 

const Switchmfat =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotmfat([!totmfat,"Monounsaturated Fat g"]);
  console.log(totmfat);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totmfat[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
})

const Switchpfat =(async()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotpfat([!totpfat,"Polyunsaturated Fat g"]);
  console.log(totpfat);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totpfat[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 

  

    const SwitchCarbo =(async()=>{
      setSBRType(sbr_type === 'asc' ? 'desc':'asc');
      setCar([!carbo,"Carbohydrates (g)"]);
      console.log(carbo);
      const res = await ax.get('../api/emoji',{
        params:{
          nuttype:carbo[1],
          sort_type:sbr_type
        }
      })
      setDataList(res.data)
      console.log(res.data)
      setData(res.data)
      // console.log(data)
  }) 


  const SwitchTSugar =(async ()=>{
    setSBRType(sbr_type === 'asc' ? 'desc':'asc');
    setTSugar([!tsugar,"Total Sugar (g)"]);
    console.log(tsugar);
    const res = await ax.get('../api/emoji',{
      params:{
        nuttype:tsugar[1],
        sort_type:sbr_type
      }
    })
    setDataList(res.data)
    console.log(res.data)
    setData(res.data)
    // console.log(data)
}) 
const SwitchPro =(async ()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setPro([!pro,"Protein (g)"]);
  console.log(pro);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:pro[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 

const SwitchTotfat =(async ()=>{
  setSBRType(sbr_type === 'asc' ? 'desc':'asc');
  setTotfat([!totfat,"Total Fat (g)"]);
  console.log(totfat);
  const res = await ax.get('../api/emoji',{
    params:{
      nuttype:totfat[1],
      sort_type:sbr_type
    }
  })
  setDataList(res.data)
  console.log(res.data)
  setData(res.data)
  // console.log(data)
}) 

  return (<div style ={styles}>
  
  <Cont background ={bg[theme]}>
      <NavBar title='Settings'/>
        <Headers color ={color[theme]}>Popular Data Preferences</Headers>
        <BtnRow>
          <Button onButtonClick={()=>Switch()} text="Calories"/>
          <Button onButtonClick={()=>SwitchCarbo()} text="Carbohydrates"/>
          <Button onButtonClick={()=>SwitchTSugar()}text="Total Sugar"/>
          <Button onButtonClick={()=>SwitchPro()} text="Protein"/>
          <Button onButtonClick={()=>SwitchTotfat()} text="Total Fat"/>
          <Button onButtonClick={()=>SwitchTotfib()} text="Total Fiber"/>
          <Button onButtonClick={()=>SwitchTotchol()} text="Cholesterol"/>
          <Button onButtonClick={()=>SwitchTotcalc()} text="Calcium"/>
          <Button onButtonClick={()=>SwitchTotsod()} text="Sodium"/>
          <Button onButtonClick={()=>SwitchTotpot()} text="Potassium"/>
        </BtnRow>

        <Headers color ={color[theme]}>Additional Vitamins</Headers>
        <BtnRow> 
          <Button onButtonClick={()=>SwitchTotvita()} text="Vitamin A"/>
          <Button onButtonClick={()=>SwitchTotb6()} text="Vitamin B6"/>
          <Button onButtonClick={()=>SwitchTotb12()} text="Vitamin B12"/>
          <Button onButtonClick={()=>SwitchTotvitc()} text="Vitamin C"/>
          <Button onButtonClick={()=>SwitchTotvitd()} text="Vitamin D"/>
          <Button onButtonClick={()=>SwitchTotvite()} text="Vitamin E"/>
          <Button onButtonClick={()=>SwitchTotvitk()} text="Vitamin K"/>
          <Button onButtonClick={()=>SwitchTotthia()} text="Thiamin"/>
          <Button onButtonClick={()=>SwitchTotribo()} text="Riboflavin"/>
          <Button onButtonClick={()=>SwitchTotnia()} text="Niacin"/>
          <Button onButtonClick={()=>SwitchTotfolate()} text="Folate"/>
          <Button onButtonClick={()=>SwitchTotpanto()} text="Pantothenic Acid"/>
          <Button onButtonClick={()=>SwitchTotcholine()} text="Choline"/>
        </BtnRow>

        <Headers color ={color[theme]}>Additional Minerals</Headers>
        <BtnRow>
          <Button onButtonClick={()=>SwitchTotcopper()} text="Copper"/>
          <Button onButtonClick={()=>SwitchTotiron()} text="Iron"/>
          <Button onButtonClick={()=>SwitchTotmag()} text="Magnesium"/>
          <Button onButtonClick={()=>SwitchTotmang()} text="Manganese"/>
          <Button onButtonClick={()=>SwitchTotphos()} text="Phosphorus"/>
          <Button onButtonClick={()=>SwitchTotselen()} text="Selenium"/>
          <Button onButtonClick={()=>SwitchTotsodium()} text="Sodium"/>
          <Button onButtonClick={()=>SwitchTotzinc()} text="Zinc"/>
        </BtnRow>

        <Headers color ={color[theme]}>Specific Fats</Headers>
        <BtnRow>
          <Button onButtonClick={()=>Switchsfat()} text="Saturated Fat"/>
          <Button onButtonClick={()=>Switchmfat()} text="Monounsaturated Fat"/>
          <Button onButtonClick={()=>Switchpfat()}text="Polyunsaturated Fat"/>
        </BtnRow>

        <ToggleSwitch />

      </Cont>

      </div>


  )
}