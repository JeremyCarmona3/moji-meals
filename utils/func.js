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


 export  function sortArr(
        arr=[],
        config={key:null,type:null}
    ){
        const {key,type} =config;
       
        if (key){
            arr.sort((cur,next)  => 
            
            {
                var num1 =Number(cur[key]);
                var num2 =Number(next[key]);
                
                
                if(isNaN(cur[key])){
                  num1 = cur[key];
                  num2 = next[key];
                }
                
                if(num1 > num2){
                    if(type && type ==="desc"){
                        return -1 
                    }else{
                        return 1
                    }
                }

               
                if(num1 < num2){
                    if(type && type ==="desc"){
                        return 1;
                    }else{
                        return -1
                    }
                }
    
             return 0
    
            })
            
        //    console.log(arr.slice(0,10)) 
           return arr
        } 
    }  
    // const emoji = require('./Emoji.json')
    // //   filtering(books)
    
    //    var f_emoji = filtering(emoji,{        
    //         name:"tomato"
    //    })

    //    var sorting = sortArr(emoji,{
    //      key: "Calories (kcal)",
    //      type:"desc"
    //    })

    //   console.log(sorting)