
const sol4 = (inventory)=>{
    if(!Array.isArray( inventory)  ) {
        console.log('Not an Array .');
        return ;
    }
    let arr = [];
    for( let i = 0; i < inventory.length ; i+=1){
        arr.push(inventory[i].car_year);
    }
    console.log(arr);
    return arr;
}
module.exports = sol4;