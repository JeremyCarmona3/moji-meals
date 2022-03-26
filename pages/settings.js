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
  const [BtnColor,setBtnColor] =useState('gray')
  const [BtnColor1,setBtnColor1] =useState('gray')
  const [BtnColor2,setBtnColor2] =useState('gray')
  const [BtnColor3,setBtnColor3] =useState('gray')
  const [BtnColor4,setBtnColor4] =useState('gray')
  const [BtnColor5,setBtnColor5] =useState('gray')
  const [BtnColor6,setBtnColor6] =useState('gray')
  const [BtnColor7,setBtnColor7] =useState('gray')
  const [BtnColor8,setBtnColor8] =useState('gray')
  const [BtnColor9,setBtnColor9] =useState('gray')
  const [BtnColor10,setBtnColor10] =useState('gray')
  const [BtnColor11,setBtnColor11] =useState('gray')
  const [BtnColor12,setBtnColor12] =useState('gray')
  const [BtnColor13,setBtnColor13] =useState('gray')
  const [BtnColor14,setBtnColor14] =useState('gray')
  const [BtnColor15,setBtnColor15] =useState('gray')
  const [BtnColor16,setBtnColor16] =useState('gray')
  const [BtnColor17,setBtnColor17] =useState('gray')
  const [BtnColor18,setBtnColor18] =useState('gray')
  const [BtnColor19,setBtnColor19] =useState('gray')
  const [BtnColor20,setBtnColor20] =useState('gray')
  const [BtnColor21,setBtnColor21] =useState('gray')
  const [BtnColor22,setBtnColor22] =useState('gray')
  const [BtnColor23,setBtnColor23] =useState('gray')
  const [BtnColor24,setBtnColor24] =useState('gray')
  const [BtnColor25,setBtnColor25] =useState('gray')
  const [BtnColor26,setBtnColor26] =useState('gray')
  const [BtnColor27,setBtnColor27] =useState('gray')
  const [BtnColor28,setBtnColor28] =useState('gray')
  const [BtnColor29,setBtnColor29] =useState('gray')
  const [BtnColor30,setBtnColor30] =useState('gray')
  const [BtnColor31,setBtnColor31] =useState('gray')
  const [BtnColor32,setBtnColor32] =useState('gray')
  const [BtnColor33,setBtnColor33] =useState('gray')


  


  const Switch =(async()=>{
        setSBRType(sbr_type === 'asc' ? 'desc':'asc');
        setSBC([!sbc,"Calories (kcal)"]);
        setBtnColor(BtnColor === 'gray' ? '#498098':'gray')
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
    setBtnColor5(BtnColor5 === 'gray' ? '#498098':'gray')
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
  setBtnColor6(BtnColor6 === 'gray' ? '#498098':'gray')
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
  setBtnColor7(BtnColor7 === 'gray' ? '#498098':'gray')
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
  setBtnColor8(BtnColor8 === 'gray' ? '#498098':'gray')
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
  setBtnColor9(BtnColor9 === 'gray' ? '#498098':'gray')
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
  setBtnColor10(BtnColor10 === 'gray' ? '#498098':'gray')
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
  setBtnColor11(BtnColor11 === 'gray' ? '#498098':'gray')
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
  setBtnColor12(BtnColor12 === 'gray' ? '#498098':'gray')
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
  setBtnColor13(BtnColor13 === 'gray' ? '#498098':'gray')
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
  setBtnColor14(BtnColor14 === 'gray' ? '#498098':'gray')
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
  setBtnColor15(BtnColor15 === 'gray' ? '#498098':'gray')
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
  setBtnColor16(BtnColor16 === 'gray' ? '#498098':'gray')
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
  setBtnColor17(BtnColor17 === 'gray' ? '#498098':'gray')
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
  setBtnColor18(BtnColor18 === 'gray' ? '#498098':'gray')
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
  setBtnColor19(BtnColor19 === 'gray' ? '#498098':'gray')
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
  setBtnColor20(BtnColor20 === 'gray' ? '#498098':'gray')
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
  setBtnColor21(BtnColor21 === 'gray' ? '#498098':'gray')
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
  setBtnColor22(BtnColor22 === 'gray' ? '#498098':'gray')
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
  setBtnColor23(BtnColor23 === 'gray' ? '#498098':'gray')
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
  setBtnColor24(BtnColor24 === 'gray' ? '#498098':'gray')
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
  setBtnColor25(BtnColor25 === 'gray' ? '#498098':'gray')
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
  setBtnColor26(BtnColor26 === 'gray' ? '#498098':'gray')
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
  setBtnColor27(BtnColor27 === 'gray' ? '#498098':'gray')
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
  setBtnColor28(BtnColor28 === 'gray' ? '#498098':'gray')
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
  setBtnColor29(BtnColor29 === 'gray' ? '#498098':'gray')
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
  setBtnColor30(BtnColor30 === 'gray' ? '#498098':'gray')
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
  setBtnColor31(BtnColor31 === 'gray' ? '#498098':'gray')
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
  setBtnColor32(BtnColor32 === 'gray' ? '#498098':'gray')
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
  setBtnColor33(BtnColor33 === 'gray' ? '#498098':'gray')
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
      setBtnColor1(BtnColor1 === 'gray' ? '#498098':'gray')
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
    setBtnColor2(BtnColor2 === 'gray' ? '#498098':'gray')
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
  setBtnColor3(BtnColor3 === 'gray' ? '#498098':'gray')
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
  setBtnColor4(BtnColor4 === 'gray' ? '#498098':'gray')
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
          <Button onButtonClick={()=>Switch()} bgColor = {BtnColor} text="Calories"/>
          <Button onButtonClick={()=>SwitchCarbo()} bgColor = {BtnColor1} text="Carbohydrates"/>
          <Button onButtonClick={()=>SwitchTSugar()}bgColor = {BtnColor2} text="Total Sugar"/>
          <Button onButtonClick={()=>SwitchPro()} bgColor = {BtnColor3} text="Protein"/>
          <Button onButtonClick={()=>SwitchTotfat()} bgColor = {BtnColor4} text="Total Fat"/>
          <Button onButtonClick={()=>SwitchTotfib()} bgColor = {BtnColor5} text="Total Fiber"/>
          <Button onButtonClick={()=>SwitchTotchol()} bgColor = {BtnColor6} text="Cholesterol"/>
          <Button onButtonClick={()=>SwitchTotcalc()} bgColor = {BtnColor7} text="Calcium"/>
          <Button onButtonClick={()=>SwitchTotsod()} bgColor = {BtnColor8} text="Sodium"/>
          <Button onButtonClick={()=>SwitchTotpot()}bgColor = {BtnColor9} text="Potassium"/>
        </BtnRow>

        <Headers color ={color[theme]}>Additional Vitamins</Headers>
        <BtnRow> 
          <Button onButtonClick={()=>SwitchTotvita()} bgColor = {BtnColor10} text="Vitamin A"/>
          <Button onButtonClick={()=>SwitchTotb6()} bgColor = {BtnColor11} text="Vitamin B6"/>
          <Button onButtonClick={()=>SwitchTotb12()} bgColor = {BtnColor12} text="Vitamin B12"/>
          <Button onButtonClick={()=>SwitchTotvitc()} bgColor = {BtnColor13} text="Vitamin C"/>
          <Button onButtonClick={()=>SwitchTotvitd()} bgColor = {BtnColor14} text="Vitamin D"/>
          <Button onButtonClick={()=>SwitchTotvite()} bgColor = {BtnColor15} text="Vitamin E"/>
          <Button onButtonClick={()=>SwitchTotvitk()} bgColor = {BtnColor16} text="Vitamin K"/>
          <Button onButtonClick={()=>SwitchTotthia()} bgColor = {BtnColor17} text="Thiamin"/>
          <Button onButtonClick={()=>SwitchTotribo()} bgColor = {BtnColor18} text="Riboflavin"/>
          <Button onButtonClick={()=>SwitchTotnia()} bgColor = {BtnColor19} text="Niacin"/>
          <Button onButtonClick={()=>SwitchTotfolate()}bgColor = {BtnColor20} text="Folate"/>
          <Button onButtonClick={()=>SwitchTotpanto()} bgColor = {BtnColor21}text="Pantothenic Acid"/>
          <Button onButtonClick={()=>SwitchTotcholine()} bgColor = {BtnColor22}text="Choline"/>
        </BtnRow>

        <Headers color ={color[theme]}>Additional Minerals</Headers>
        <BtnRow>
          <Button onButtonClick={()=>SwitchTotcopper()}bgColor = {BtnColor23} text="Copper"/>
          <Button onButtonClick={()=>SwitchTotiron()}bgColor = {BtnColor24} text="Iron"/>
          <Button onButtonClick={()=>SwitchTotmag()} bgColor = {BtnColor25}text="Magnesium"/>
          <Button onButtonClick={()=>SwitchTotmang()} bgColor = {BtnColor26}text="Manganese"/>
          <Button onButtonClick={()=>SwitchTotphos()} bgColor = {BtnColor27}text="Phosphorus"/>
          <Button onButtonClick={()=>SwitchTotselen()} bgColor = {BtnColor28}text="Selenium"/>
          <Button onButtonClick={()=>SwitchTotsodium()} bgColor = {BtnColor29}text="Sodium"/>
          <Button onButtonClick={()=>SwitchTotzinc()}bgColor = {BtnColor30} text="Zinc"/>
        </BtnRow>

        <Headers color ={color[theme]}>Specific Fats</Headers>
        <BtnRow>
          <Button onButtonClick={()=>Switchsfat()} bgColor = {BtnColor31}text="Saturated Fat"/>
          <Button onButtonClick={()=>Switchmfat()} bgColor = {BtnColor32}text="Monounsaturated Fat"/>
          <Button onButtonClick={()=>Switchpfat()} bgColor = {BtnColor33}text="Polyunsaturated Fat"/>
        </BtnRow>

        <ToggleSwitch />

      </Cont>

      </div>


  )
}