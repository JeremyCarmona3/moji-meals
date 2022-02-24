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
  const [data,setData] =useState([])
  const [fruit,setFruit] = useState('lemon')

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
   setEmoji(emoji)
   setCondition(name)
   setnutOne(nutOne)
   setnutTwo(nutTwo)
   setnutThree(nutThree)
   setnutFour(nutFour)
   setnutFive(nutFive)
   setnutName(keyName)

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
      timer = setTimeout( async () =>{
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
