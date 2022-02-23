import ax from 'axios';
import styled from 'styled-components'
import Toggle from '../comps/buttons/Toggle'
import { useTheme } from '../utils/provider';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { bgcolor,textcolor } from '../comps/variable';

var timer =null;

const SetCont = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-contents;
height:900px;
width:100%;
background-color:${props=>props.background}
`


export default function Settings({
  bg = bgcolor,
}) {
  const {theme} =useTheme();
  // const bgcolor ={};
  const {setTheme} = useTheme();
  // const [data,setData] =useState([]) 
  // const [jpn,setJPN] =useState('ENG') 
  // const router = useRouter()

  // const Switch =async(lang)=>{
  //   // console.log(lang)
  //   // if(timer){
  //   //   clearTimeout(timer);
  //   //   timer = null;
  //   // }
  //     　timer = setTimeout(async () =>{
  //       console.log("async call");
  //       const res = await ax.get('../api/books2',{
  //         params:{
  //           lang:"jpn",
  //         }
  //       })
  //       console.log(res.data)
  //       setData(res.data)
  //       timer =null;
  //     },1000) 
    

  // }
  
  return (
    <SetCont background ={bg[theme]}>
      <Toggle text={"DARK Mode"} Click={()=>setTheme('dark')}></Toggle>
      <Toggle text={"Light Mode"} Click={()=>setTheme('light')}></Toggle>
  

    </SetCont>

  )
}
