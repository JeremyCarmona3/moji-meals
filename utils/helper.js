import fs from 'fs';
const afs = fs.promises;

export async function Save(
  id=null,
  json=null
){
  if(id && json){
    await afs.writeFile(`./saves/${id}.json`, JSON.stringify(json, null, 2));
  }
}

export async function Read(){
  const allfs = await afs.readdir('./saves');
  console.log(allfs);
  return allfs;
}