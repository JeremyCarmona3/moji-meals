// add functions here

export function filtering(
    arr=[],
    config = {name:null}
    )
    {
        const {name} = config;
        
        if(name){

            const filtered_arr = arr.filter((o)=>{
        
                var cond = true;
                if(name){
                     cond = cond && o.name.includes(name)
                 }
                 return cond 
                }) 
              console.log(filtered_arr)
              return filtered_arr;
        }else{
            console.log([])
            return [];
        }
    }

    // const emoji = require('./Emoji.json')
    // //   filtering(books)
    
    //    var f_emoji = filtering(emoji,{        
    //         name:""
    //    })

    