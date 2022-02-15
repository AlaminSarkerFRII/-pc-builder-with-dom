
 document.getElementById('sixteenGB').addEventListener('click',function(){

    updatePrice('memory-cost',300);


 });

/* access ITB 

document.getElementById('eightGB').addEventListener('click',function(){
 
    updatePrice('memory-cost', 0); // for reset 8GB cost
    
})

document.getElementById('ssd3').addEventListener('click',function(){
 
    updatePrice('storage-cost',500);
    
})

document.getElementById('paid-delivery').addEventListener('click',function(){
   
    updatePrice('delivery-cost',20);
    
});

 */

function onClick(clickId, updateId,price){
    document.getElementById(clickId).addEventListener('click',function(){
   
        updatePrice(updateId,price);

    })
}

onClick('sixteenGB','memory-cost',300)
onClick('eightGB','memory-cost',0)
onClick('ssd1','storage-cost',0)
onClick('ssd2','storage-cost',200)




function updatePrice (itemId,price){
   
        const memoryCost = document.getElementById(itemId);
         memoryCost.innerText = price;
    
         //cost access 
         const bestPrice = document.getElementById('best-price').innerText;
         const memoryPrice = document.getElementById('memory-cost').innerText;
         const storagePrice = document.getElementById('storage-cost').innerText;
         const deliveryPrice = document.getElementById('delivery-cost').innerText;
         const totalPrice = 
         parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
    
         //update total price k ...
        const total = document.getElementById('total-price');
        total.innerText = totalPrice;

}


// Cupon code access

document.getElementById('apply-btn').addEventListener('click',function(){
    const inputText = document.getElementById('promo-input').value;

    console.log(inputText);
    
})