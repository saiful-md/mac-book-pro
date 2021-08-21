//memory 
const memoryOne = document.getElementById('memory-one');
const memoryTwo = document.getElementById('memory-two');
//storage
const storageOne = document.getElementById('storage-one');
const storageTwo = document.getElementById('storage-two');
const storageThree = document.getElementById('storage-three');
//delivery
const deliveryOne = document.getElementById('delivery-one');
const deliveryTwo = document.getElementById('delivery-two');
//cost
const bestCost = document.getElementById('best-cost');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalCost = document.getElementById('total-cost');
//promo code
const totalBalance = document.getElementById('total-balance');
const promoInput = document.getElementById('promo-input');
const promoButton = document.getElementById('promo-button');



// function's
// input field function
function getInput(product,cost){
    let getMemoryCost = product;
    getMemoryCost.innerText = parseInt(cost);
}

// total add calculation function 
function getCalculate(){
    const costBest = parseInt(bestCost.innerText);
    const costMemory = parseInt(memoryCost.innerText);
    const costStorage = parseInt(storageCost.innerText);
    const costDelivery = parseInt(deliveryCost.innerText);
    const result = costBest + costMemory + costStorage + costDelivery;
    totalCost.innerText =parseInt(result) ;
    totalBalance.innerText = parseInt(result);
    
}

// promo calculation funcion 
function promoCaculate(){
   const promoCondition = totalCost.innerText;
   const promoConditionValue = (promoCondition * 20) / 100;
   const resultPromoCondition = promoCondition - promoConditionValue;
   totalBalance.innerText = resultPromoCondition;
}


 /*================== event handeler ============================*/
 
// clicked memory item 
memoryOne.addEventListener('click',function(){
    getInput(memoryCost,0);
    getCalculate();
    
})
memoryTwo.addEventListener('click',function(){
    getInput(memoryCost,180);
    getCalculate();
})


//clicked storage item 
storageOne.addEventListener('click',function(){
    getInput(storageCost,0);
    getCalculate();
})
storageTwo.addEventListener('click',function(){
    getInput(storageCost,100);
    getCalculate();
})
storageThree.addEventListener('click',function(){
    getInput(storageCost,180);
    getCalculate();
})


//clicked delivery cost 
deliveryOne.addEventListener('click',function(){
    getInput(deliveryCost,0);
    getCalculate();
})
deliveryTwo.addEventListener('click',function(){
    getInput(deliveryCost,20);
    getCalculate();
})

//promo code clicked 
promoButton.addEventListener('click',function(){
    const inputValue = promoInput.value;
    const coditionValue ='stevekaku';
    getCalculate();
    if(inputValue.toLowerCase() == coditionValue.toLowerCase()){
        promoCaculate();
    }
    promoInput.value = '';
})