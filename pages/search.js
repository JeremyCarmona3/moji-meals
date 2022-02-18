import EmojiCard from '../comps/cards/EmojiCard'
import Emoji from '../utils/Emoji.json'
import styled from 'styled-components'
import EmojiCardBig from '../comps/cards/EmojiCardBig';
import React, { useState } from 'react';


const CardCont = styled.div`
width:100%;
height:100%;
display:flex;
flex-wrap:wrap;
background-color:pink;
flex-direction:row;
justify-content:center;
`

export default function Home() {

  var lists =[]
  lists = Emoji
  const [condition,setCondition] = useState('main') 
  const [emoji,setEmoji] =useState('🍇')


  // lists = lists.slice(0,10) 
  var status = condition
  
  const ShowDetails =(i)=>{
   var name = lists[i].name
   var emoji =lists[i].emoji
  
   console.log(name)
   console.log(emoji)

   setEmoji(emoji)
   setCondition(name)
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
       <EmojiCardBig> imagesrc = </EmojiCardBig>
   </>)
  }



}
