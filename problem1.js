

const sol1 = (inventory) =>{
if( !Array.isArray( inventory)  ) {
    console.log('Not an Array .');
    return ;
}
    for(let i = 0 ; i < inventory.length ; i++){
        if(inventory[i].id === 33 ){
            return `Car 33 is a ${inventory[i].car_year} ${inventory[i].car_make} ${inventory[i].car_model};`
        }
    }

};

module.exports =  sol1;
