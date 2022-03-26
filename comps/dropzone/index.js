import { useDrag, useDrop } from 'react-dnd'
import styled from 'styled-components'

const DropCont = styled.div`  
display:flex;  
position: ${({position})=>position};
  bottom: 0px;
  left: 0px;
  background: ${({bg})=>bg || 'aqua'};
  height: 300px;
  width: 100vw;
  z-index: 1;
  overflow-y: auto;
`;

const Dropzone = ({
  //props
  children=null,
  onDropItem=()=>{},
  position='fixed'
}) => {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'emoji',
    drop:(item, monitor)=>{
      console.log('the book that was dropped', item);
      onDropItem(item);
    },
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))

	return <DropCont
			ref={drop}
      bg={canDrop && isOver ? 'pink' : 'aqua'}
      position={position}
		>
      {children}
		</DropCont>
}

export default Dropzone