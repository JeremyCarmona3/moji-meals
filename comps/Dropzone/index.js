import { useDrag, useDrop } from 'react-dnd'
import React, {useState,useEffect} from 'react';
import styled  from 'styled-components'

const DropCont =styled.div`
height:70vh;
background:${({bg})=>bg || '#ccc'};
width:100%;
postion:relative;
`
// const [shop,setShop] =useState([])


const Dropzone = ({
  //props 
  children =null,
  onDropItem=()=>{},
  onShift =()=>{},
}) => {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "emoji",
    drop:(item, monitor)=>{
     onDropItem(item)
     onShift(item)
    },
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))

	return <DropCont
			      ref={drop}
            bg={canDrop && isOver ? '#999' :'#DDD'}>
            {children}
     
		    </DropCont>
}

export default Dropzone