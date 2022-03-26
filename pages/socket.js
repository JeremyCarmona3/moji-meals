import { io } from "socket.io-client";
import { useEffect,useState } from "react";



export default function Sockets() {

  const [mySoc, setMySoc]= useState(null)
  const [text, setText]= useState('')

  const [msgs,setMsgs]= useState([])
  const [mouseps,setMousePos] =useState({
    left:0,
    top:0
  })


  const [users,setUser] =useState({});

  useEffect(()=>{
    // const socket = io("ws://example.com/my-namespace", {
    //   reconnectionDelayMax: 10000,
    //   auth: {
    //     token: "123"
    //   },
    //   query: {
    //     "my-key": "my-value"
    //   }
    // });

    const socket =io('http://localhost:8888')

    socket.on('init_user',(users)=>{
    setUser(users)
    })
  
    socket.on('update_mouse',(x,y)=>{
      console.log('hi')
      setMousePos({
        left:x,
        top:y
      })
    })
    
    
    socket.on('joined',(id,text)=>{
      // alert(`${id} says ${text}`)
      setMsgs((prev)=>[
        ...prev,
        `${id} sats${text}`
      ]
      )
    })
    setMySoc(socket)
  }, [])


   const EmitMouseMove = async (x,y) =>{
     console.log(x,y)
     if(mySoc !== null)
     mySoc.emit('mouse_xy',x,y)
   }



  const EmitToIO =async()=>{
    if(mySoc !== null){
      mySoc.emit('user_ready',text)
    } 
  }

  const colors =['green','blue','pink','aqua','yellow']
  return (
    <div 
    style={{height:'100vh'}}
    onMouseMove ={(e)=>EmitMouseMove(e.clientX,e.clientY)}>
     
      {Object.values(users).map((o,i)=><div key ={i}
       style ={
        {
          position:'fixed',
          background:colors[i%5],
          width:10,
          height:10,
          left:o.left,
          top:o.top
        }
      }></div>

      )}
   
      <input type = 'text' onChange={(e)=>setText(e.target.value)}></input>
      <button onClick={EmitToIO}>Join and alert</button>
      {msgs.map((o,i) => <div key={i} style ={{background:'red',padding:10}}>
       {o}
      </div>
      )}

  </div>)}
