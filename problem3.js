const sol3 = (inventory)=>{
    inventory.sort((a ,b) =>  parseInt(a.car_model) - parseInt( b.car_model) );
    for( let i = 0; i < inventory.length ; i+=1){
        console.log(inventory[i]);
    }
    
}
module.exports = sol3;