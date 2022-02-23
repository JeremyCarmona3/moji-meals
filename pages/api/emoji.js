import Emoji from '../../utils/Emoji.json'
import  {filtering}  from '../../utils/func';


export default async function handler(req, res) {

  //detect if filter/save/read
  const {txt} =req.query;
  var lists =[];
  if(txt){
      lists = filtering(Emoji,{
      name:txt
    })
  }

  lists =lists.slice(0,10)
  res.status(200).json(lists);
}
