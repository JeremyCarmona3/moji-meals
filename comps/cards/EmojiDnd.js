import React, {useState} from 'react';
import { useDrag, useDrop } from 'react-dnd'
import styled from 'styled-components';

const EmojiCont = styled.div`
  ${({op})=>op && `opacity:${op};`};
  ${({position, left, top})=> position === 'fixed' && `
    left: ${left}px;
    top: ${top}px;
    position: ${position};
    z-index: 2;
  `}
`;

const EmojiDnd = ({
  //props
  children=null,
  item={}
}) => {
  const [pos, setPos] = useState({
    left: 0,
    top: 0,
    position: 'relative'
  })
	const [{ isDragging, coords }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: 'emoji',
    item,
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    end: (item,monitor) => {
      if(!monitor.didDrop()){
        setPos({
          left: monitor.getClientOffset().x,
          top: monitor.getClientOffset().y,
          position: 'fixed'
        })
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      coords: monitor.getClientOffset(),
    })
  }))

//   console.log(coords)
  //console.log(isDragging);

  const sty = {
    left: pos.left,
    top: pos.top,
    position: pos.position
  }

  if(coords && isDragging) {
    sty.left = coords.x + 20
    sty.top = coords.y
    sty.position = 'fixed'
  }

	return <EmojiCont ref={dragPreview} 
  op={isDragging ? 0.5 :1}
  left={sty.left}
  top={sty.top}
  position={sty.position}
  >
    <div ref={drag}>
      {children}
    </div>
	</EmojiCont>
}

export default EmojiDnd;