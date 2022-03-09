import EmojiCard from '../comps/cards/EmojiCard'
import Emoji from '../utils/Emoji.json'
import styled from 'styled-components'
import EmojiCardBig from '../comps/cards/EmojiCardBig';
import React, { useState } from 'react';
import HighlightCard from '../comps/cards/HighlightCard';
import NutritionCard from '../comps/cards/NutritionCard';
import NavBar from '../comps/global/Navbar';
import { useTheme } from "../utils/provider";
import { bgcolor} from '../comps/variable';
import ax from 'axios'

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const todorouter = require('./Routes/todo');

// const config = require('./config')

// app.use(express.json())

// app.use(todorouter)

// mongoose.connect(config.MONGOODB_URL, (err) => {
//   if(err) return console.log(err)

//   console.log('connected to db successfully')
// })

// app.listen(3000, () => {
//   console.log('serving running on 3000')
// })


const CardCont = styled.div`
width:100%;
height:100%;
display:flex;
flex-wrap:wrap;
flex-direction:row;
justify-content:center;
background-color:${props=>props.background};
`

const ContOne = styled.div`
width:100%;
height:100%;
display:flex;
flex-wrap:wrap;
flex-direction:row;
justify-content:center;
margin:50px;
`


const ContTwo = styled.div`
width:100%;
height:100%;
display:flex;
flex-wrap:wrap;
flex-direction:row;
justify-content:center;
`

const UserGuide = styled.div`
width:100%;
height:100%;
display:flex;
flex-wrap:wrap;
flex-direction:column;
justify-content:center;
align-items:center;
`

const TextCont = styled.div`
display:flex;
font-size:40px;
color:orange;
font-weight:bold;
`

const InputCont = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:space-around;
align-items:center;
margin:10px;
`

const SearchButton =styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 228px;
height: 64px;
`

const TextInput = styled.input`
width:30%;
height:50px;
border-radius:10px;
display:flex;
`

var timer = null;

export default function Home({
  bg = bgcolor,
}){
  
  // const {setTheme} = useTheme();
  const {theme} =useTheme();


  var lists =[]
  lists = Emoji
  const [condition,setCondition] = useState('main') 
  const [emoji,setEmoji] =useState('🍇')
  const [nutOne,setnutOne] = useState('data')
  const [nutTwo,setnutTwo] = useState('data')
  const [nutThree,setnutThree] = useState('data')
  const [nutFour,setnutFour] = useState('data')
  const [nutFive,setnutFive] = useState('data')
  const [nutName,setnutName] = useState('name')
  const [nutFactOne,setnutFactOne] = useState('name')
  const [nutFactTwo,setnutFactTwo] = useState('name')
  const [nutFactThree,setnutFactThree] = useState('name')

  const [data,setData] =useState([])
  const [fruit,setFruit] = useState('lemon')

  var status = condition
  
  const ShowDetails =(i)=>{
   var name = lists[i].name
   var emoji =lists[i].emoji
   var keyName = Object.getOwnPropertyNames(lists[i])

   var nutOne = lists[i]["Calories (kcal)"]
   var nutTwo = lists[i]["Carbohydrates (g)"]
   var nutThree = lists[i]['Total Sugar (g)']
   var nutFour = lists[i]['Protein (g)']
   var nutFive = lists[i]["Total Fat (g)"]
  
   
   var FactOne = lists[i].Fact1
   var FactTwo = lists[i].Fact2
   var FactThree = lists[i].Fact3
   
   console.log(FactOne)

   setEmoji(emoji)
   setCondition(name)
   setnutOne(nutOne)
   setnutTwo(nutTwo)
   setnutThree(nutThree)
   setnutFour(nutFour)
   setnutFive(nutFive)
   setnutName(keyName)
   setnutFactOne(FactOne)
   setnutFactTwo(FactTwo)
   setnutFactThree(FactThree)

   window.scrollTo(0, 0);
  }

  
  const goBack = () => {
    setCondition('main');
  }
 


  const inputFilter =async(txt)=>{
    console.log(txt)
   
    if(timer){
      clearTimeout(timer);
      timer = null;
    }

    if(timer === null){
      timer = setTimeout(async () =>{
        console.log("async call");
        const res = await ax.get('../api/emoji',{
          params:{
            txt:txt
          }
        })
        console.log(res.data)
        setData(res.data)
        setFruit(txt)
        console.log(fruit)
        if(txt == fruit){
          var userchoice = document.getElementById(txt)
          userchoice.style.border = "red solid 2px"
         }
   

      },1000) 
    }
  } 




if(status == 'main'){
    return (<>
     
        <CardCont background ={bg[theme]}>
        <NavBar/>
          <UserGuide>
           <TextCont>Be familiar with food Nutritions</TextCont> 
           <TextCont>Click an emoji to learn more!!</TextCont> 
          </UserGuide>
          <InputCont>
            <TextInput onChange={(e)=>inputFilter(e.target.value)}></TextInput>
          </InputCont>
          {lists.map((o,i)=><EmojiCard id = {o.name} key={i} emoji ={o.emoji} onclick ={()=>ShowDetails(i)}></EmojiCard>)}
        </CardCont>
   </>)
  }

  if(status == condition){
    return (<>
    <CardCont background ={bg[theme]}>
     <NavBar 
        title='' 
        showBackBtn=''
        showLogo='none'
        backOnClick={goBack}
      />
     
       <ContOne>
            <EmojiCardBig imagesrc= {emoji} emojiname ={condition}> </EmojiCardBig>
       </ContOne>
       
      <ContTwo>
          <HighlightCard facttext={nutFactOne} facttext2={nutFactTwo} facttext3={nutFactThree}/>
          <NutritionCard 
          nutNameOne ={nutName[2]}
          nutNameTwo ={nutName[3]}
          nutNameThree= {nutName[4]}
          nutNameFour= {nutName[5]}
          nutNameFive= {nutName[6]}
          nutOne ={nutOne} 
          nutTwo ={nutTwo} 
          nutThree ={nutThree}
          nutFour={nutFour} 
          nutFive ={nutFive}/>
      </ContTwo> 
  </CardCont>
   </>)
  }



}
