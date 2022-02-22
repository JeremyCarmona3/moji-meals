import EmojiCard from '../comps/cards/EmojiCard'
import Emoji from '../utils/Emoji.json'
import styled from 'styled-components'
import EmojiCardBig from '../comps/cards/EmojiCardBig';
import React, { useState } from 'react';
import HighlightCard from '../comps/cards/HighlightCard';
import NutritionCard from '../comps/cards/NutritionCard'


const CardCont = styled.div`
width:100%;
height:100%;
display:flex;
flex-wrap:wrap;
background-color:white;
flex-direction:row;
justify-content:center;
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

export default function Home() {

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

  var status = condition
  
  const ShowDetails =(i)=>{
   var name = lists[i].name
   var emoji =lists[i].emoji
   var keyName = Object.getOwnPropertyNames(lists[i])


   var nutOne = lists[i].Calories
   var nutTwo = lists[i].Carbohydrates
   var nutThree = lists[i].TotalSugar
   var nutFour = lists[i].Protein
   var nutFive = lists[i].TotalFat
  
   console.log(nutOne)
   setEmoji(emoji)
   setCondition(name)
   setnutOne(nutOne)
   setnutTwo(nutTwo)
   setnutThree(nutThree)
   setnutFour(nutFour)
   setnutFive(nutFive)
   setnutName(keyName)


  }

if(status == 'main'){
    return (<>
     <CardCont>
       {/* {lists.map((o,i)=><EmojiCard key={i} emoji ={o.emoji}></EmojiCard>)} */}
       {lists.map((o,i)=><EmojiCard key={i} emoji ={o.emoji} onclick ={()=>ShowDetails(i)}></EmojiCard>)}
     </CardCont>
   </>)
  }

  if(status == condition){
    return (<>
     <CardCont>
       
       <ContOne>
            <EmojiCardBig imagesrc= {emoji}> </EmojiCardBig>
       </ContOne>
       
      <ContTwo>
          <HighlightCard/>
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
