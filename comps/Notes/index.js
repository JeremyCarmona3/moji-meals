import React, {useState,useEffect} from 'react';
import { useDrag, useDrop } from 'react-dnd'


import styled from 'styled-components'

const NoteCont =styled.div`
background:#ABC;
color:#666;
padding:5px;
display:inline-flex;
id:${props => props.id};
${({position,left,top})=> (position === 'fixed'||position === 'absolute') &&  `
left:${left}px;
top:${top}px;
position:${position};
` }
`
const cross={
 width:10,
 height:10,
 zindex:2
}

const Notes = ({
  //props
  type ='notes',
  children =null,
  notepos=null,
  notecontent=null,
  id = null,
  onUpdateNote =()=>{},
  click =()=>{}
}) => {
  const [pos,setPos] =useState(notepos||{
    left:0,
    top:0,
    position:'relative'
  });


  const [content,setContent]=useState(notecontent||`
    Notes
    ${children || ''}
   `)

   useEffect(()=>{
    if(type === 'boardnotes'){
      onUpdateNote({
        pos,
        content
      })
    }
   },[pos,content])

   const [showInput,setShowInput]= useState(false)


	const [{ isDragging, coords }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type,
    item: {},
    end:(item,monitor)=>{
      if(type === 'boardnotes'){
        setPos({
          left:monitor.getClientOffset().x,
          top:monitor.getClientOffset().y,
          position:'absolute'
        })
      }
    },
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging:monitor.isDragging(),
      coords:monitor.getClientOffset()
    })
  }))

  //console.log(isDragging);
  const sty = {
    left:type ==="boardnotes" ? pos.left:null,
    top:type ==="boardnotes" ? pos.top:null,
    position:type ==="boardnotes" ? pos.position:null,
  }

  if(coords && isDragging){
    sty.left = coords.x;
    sty.top = coords.y;
    sty.position = 'fixed';
  }


	return <NoteCont ref={dragPreview} {...sty} id ={id}>
    <img src ='/cross.png' style={cross} onClick ={click}/>
    <div ref ={drag} onClick ={()=>setShowInput(true)}>
     {showInput === false ? content:<textarea 
     value ={content}
     onChange ={(e)=>setContent(e.target.value)}
     onBlur={()=>setShowInput(false)}>

      </textarea>}
    </div>
	</NoteCont>
}

export default Notes;