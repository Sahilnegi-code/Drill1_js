const sol2 = (inventory)=>{
    if(!Array.isArray( inventory)  ) {
        console.log('Not an Array .');
        return ;
    }
    for(let i = 0 ; i < inventory.length ; i++){
        if(i === inventory.length-1 ){
            return `Last car is a  ${inventory[i].car_make} ${inventory[i].car_model};`
        }
    }
    
}
module.exports = sol2;