import React, { useState } from 'react'
import ax from 'axios';
import Button from '../comps/buttons/Button'
import NavBar from '../comps/global/Navbar'
import Toggle from '../comps/buttons/Toggle'

import { useTheme, useNut,useTSugar,useCalo,useData } from "../utils/provider";
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

  return (<div style ={styles}>
  
  <Cont background ={bg[theme]}>
      <NavBar title='Settings'/>
        <Headers color ={color[theme]}>Popular Data Preferences</Headers>
        <BtnRow>
          <Button onButtonClick={()=>Switch()} text="Calories"/>
          <Button onButtonClick={()=>SwitchCarbo()} text="Carbohydrates"/>
          <Button onButtonClick={()=>SwitchTSugar()}text="Total Sugar"/>
          <Button text="Protein"/>
          <Button text="Total Fat"/>
          <Button text="Total Fiber"/>
          <Button text="Cholesterol"/>
          <Button text="Calcium"/>
          <Button text="Sodium"/>
          <Button text="Potassium"/>
        </BtnRow>

        <Headers color ={color[theme]}>Additional Vitamins</Headers>
        <BtnRow> 
          <Button text="Vitamin A"/>
          <Button text="Vitamin B6"/>
          <Button text="Vitamin B12"/>
          <Button text="Vitamin C"/>
          <Button text="Vitamin D"/>
          <Button text="Vitamin E"/>
          <Button text="Vitamin K"/>
          <Button text="Thiamin"/>
          <Button text="Riboflavin"/>
          <Button text="Niacin"/>
          <Button text="Folate"/>
          <Button text="Pantothenic Acid"/>
          <Button text="Choline"/>
        </BtnRow>

        <Headers color ={color[theme]}>Additional Minerals</Headers>
        <BtnRow>
          <Button text="Copper"/>
          <Button text="Iron"/>
          <Button text="Magnesium"/>
          <Button text="Manganese"/>
          <Button text="Phosphorus"/>
          <Button text="Selenium"/>
          <Button text="Sodium"/>
          <Button text="Zinc"/>
        </BtnRow>

        <Headers color ={color[theme]}>Specific Fats</Headers>
        <BtnRow>
          <Button text="Saturated Fat"/>
          <Button text="Monounsaturated Fat"/>
          <Button text="Polyunsaturated Fat"/>
        </BtnRow>

        <ToggleSwitch />

      </Cont>

      </div>


  )
}
