import {Save, Read} from '../../utils/helper';


export default async function handler(req, res) {
    const{uuid} =req.query;
    try{
        const json = await import(`@/saves/${uuid}.json`)
        console.log(json)
        res.status(200).json(json)
    }
    catch(e){
        res.status(200).json(false)
    } 
    
  }
  
