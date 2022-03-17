import EmojiCard from '../comps/cards/EmojiCard'
import Emoji from '../utils/Emoji.json'
import styled from 'styled-components'
import EmojiCardBig from '../comps/cards/EmojiCardBig';
import React, { useState } from 'react';
import HighlightCard from '../comps/cards/HighlightCard';
import NutritionCard from '../comps/cards/NutritionCard';
import NavBar from '../comps/global/Navbar';
import { 
  useTheme, 
  useData,
  useNut,
  useTSugar,
  useCalo,
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
  // var lists =[]
  const [lists,setLists]  = useState(Emoji) 
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

  const [fruit,setFruit] = useState('lemon')

  const [sbr_type,setSBRType] =useState('asc')
  // const [count,setCount] =useState(1)
  // const [sbc, setSBC] = useState(([false,"Calories (kcal)"]))

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
        // setData(res.data)
        setFruit(txt)
        console.log(fruit)
        if(txt == fruit){
          var userchoice = document.getElementById(txt)
          userchoice.style.border = "red solid 2px"
         }

      },1000) 
    }
  } 

  const filter =() =>{
    console.log("async call");
    setSBRType(sbr_type === 'asc' ? 'desc':'asc')
    setLists(datalist)
    if(sbr_type === 'desc'){
      lists.reverse()
    }
    console.log(sbr_type)
    // console.log(lists)
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
          <button style ={{backgroundColor:sbr_type == "asc"? 'pink':'white'}} onClick={()=>filter()}>Asc desc</button>
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