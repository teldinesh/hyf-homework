const boughtCandyPrices = [];
const boughtCandy = [];
var amountToSpend = Math.random() * 100;
function addcandy (candyType,weight) {
if (candyType == 'Sweet') {
    boughtCandyPrices.push(weight*0.5);
    boughtCandy.push()
}
else if (candyType == 'Chocolate') {
    boughtCandyPrices.push(weight * 0.7);
}
else if (candyType == 'Toffee') {
    boughtCandyPrices.push(weight * 1.1);
} 
else {
    boughtCandyPrices.push(weight * 0.03);
}
const canBuySomeMoreCandy = canBuyMoreCandy();

if (canBuySomeMoreCandy == true) {
    console.log('You can buy more, so please do!');
}
else 
    console.log('Enough candy for you!');
return boughtCandyPrices;
}

addcandy("Sweet",20000);   
addcandy("Sweet",50); 
addcandy("Chocolate",20);  
addcandy("Toffee",50); 
addcandy("Chewing-gum",100000);

function canBuyMoreCandy(){
    let totalAmount = 0;
    var i = 0;
    while (boughtCandyPrices[i]) {
        totalAmount +=  boughtCandyPrices[i] ;
        if (totalAmount > amountToSpend){
            return false;
        }
        i++;
        return true;
    }
}

