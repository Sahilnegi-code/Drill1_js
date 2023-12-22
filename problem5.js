let arr = require('./problem4'); 
const sol5 = (inventory)=>{
    if(!Array.isArray( inventory)  ) {
        console.log('Not an Array .');
        return ;
    }

    arr = arr(inventory);

    let res = [];
    for( let i = 0; i < arr.length ; i+=1){
        if(arr[i] < 2000 ){
            console.log(arr[i]);
            res.push(arr[i]);
        }
        
    }
    
    return res;
}
module.exports = sol5;