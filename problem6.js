
const sol6 = (inventory)=>{
 
    
let res = [];
    for( let i = 0; i < inventory.length ; i+=1){
        if(inventory[i].car_make === 'BMW' || inventory[i].car_make === 'Audi'  ){
            res.push(inventory[i]);
        }
        
    }
    
    return res;
}
module.exports = sol6;