
const sol4 = (inventory)=>{
    // inventory.sort((a ,b) =>  parseInt(a.car_model) - parseInt( b.car_model) );
    let arr = [];
    for( let i = 0; i < inventory.length ; i+=1){
        arr.push(inventory[i].car_year);
    }
    console.log(arr);
    return arr;
}
module.exports = sol4;