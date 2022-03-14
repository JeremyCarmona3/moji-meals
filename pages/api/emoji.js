import Emoji from '../../utils/Emoji.json'
import  {filtering,sortArr}  from '../../utils/func';

export default async function handler(req, res) {

  //detect if filter/save/read
  const {txt,sort_type,nuttype} =req.query;
  var lists =[];
  
  if(txt){
      lists = filtering(Emoji,{
      name:txt
    })
  }
  if(nuttype){
    lists = sortArr(Emoji,{
      key:nuttype,
      type:sort_type
    })
  }
  
  res.status(200).json(lists);
}
