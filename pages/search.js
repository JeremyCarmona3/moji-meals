import EmojiCard from '../comps/cards/EmojiCard'
import Emoji from '../utils/Emoji.json'
import styled from 'styled-components'


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
  // lists = lists.slice(0,10)

  return (<>
  
   <CardCont>
     {/* {lists.map((o,i)=><EmojiCard key={i} emoji ={o.emoji}></EmojiCard>)} */}
     {lists.map((o,i)=><EmojiCard key={i} emoji ={o.emoji}></EmojiCard>)}

   </CardCont>
  
  </>
  )
}
