import { useRouter } from "next/router";
import { v4 as uuidv4 } from 'uuid';
import { TouchBackend } from 'react-dnd-touch-backend'
import { DndProvider } from 'react-dnd'
import CardList from "../comps/CardList";
import Dropzone from "../comps/Dropzone";
import { useState,useEffect } from "react";
import Emoji from '../utils/Emoji.json'
import ax from 'axios'
import { IoSearchCircle } from "react-icons/io5";


export default function Board() {
  const r = useRouter();
  const {uuid} = r.query;
  const [lists,setLists]  = useState(Emoji) 
  const[cns,setCns]=useState({})
  const [fcode,setFcode] =useState(1)

  const initialBag = [
    "plasticbag",
  ];

  const [bag,setBag] =useState([])
  
  // console.log(cns)
  // console.log(lists[fcode].emoji)
  console.log(fcode)
  console.log(bag)


  useEffect(()=>{
      const Check =()=>{
      setBag({...bag},fcode)
      }
      Check()
  }
,[fcode])
 

  const HandleUpdateCard = (id) =>{
    cns[id] ={
      ...cns[id],
     
    },
    setCns({
      ...cns
    })
  }


  // const scan = ()=>{
  //   setBag(...bag,lists[fcode].emoji);
  // }

  return (
    <div>
      <DndProvider backend ={TouchBackend} options={{
       enableTouchEvents:false,
       enableMouseEvents:true
      }}>
          
          <Dropzone onDropItem ={(item)=>{
             const c_id = uuidv4(); 
             

              setCns((prev)=>({
              ...prev,
              [c_id]:{id:c_id}
              
            }))
    
          }}
            //  onShift ={(item) =>{
            //  const shopping = lists[fcode].emoji
             
            //  setBag((prev)=>({
            //    ...prev,
            //    ["food"]:{"food":shopping}

            //  }));
          


            //  }}
            >
            <h3>Board Notes  {uuid}</h3>

           {Object.values(cns).map((o,i)=>
           <CardList 
            type ='boardnotes' 
            key ={i}
            id ={o.id}
            emoji ={lists[fcode].emoji}
            cardpos={o.pos}
            onUpdateCard={(obj)=>HandleUpdateCard(o.id,obj)}
            onUpdateEmoji ={(obj)=>UpdateEmoji(i,obj)}
            >
            </CardList>)
            } 

      
           {/* <div 
            type ='boardnotes' 
            >
            {lists[fcode].emoji}</div> */}

          </Dropzone>

          <div>
              <h3>Menu</h3> 
          
            {lists.map((o,i)=><CardList key ={i} emoji={o.emoji} foodcount ={i} onUpdateFood ={()=>{setFcode(i)}} ></CardList>)}
          
          
          <div>
             <div>{lists[fcode].emoji}</div>
             
          </div>
         


          </div>

      </DndProvider>
    </div>
  )
}
