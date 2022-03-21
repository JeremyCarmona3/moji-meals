import Emoji from '../../utils/Emoji.json'

export default async function handler(req, res) {

  //detect if filter/save/read
  var lists =[Emoji]
  res.status(200).json(lists);
}
