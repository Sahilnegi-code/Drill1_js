const sol3 = (inventory)=>{
    if(!Array.isArray( inventory)  ) {
        console.log('Not an Array .');
        return ;
    }
    inventory.sort((a ,b) =>
a.car_model.localeCompare(b.car_model)
      );
    for( let i = 0; i < inventory.length ; i+=1){
        console.log(inventory[i]);
    }
    return inventory;
}
module.exports = sol3;