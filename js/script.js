
 document.getElementById('sixteenGB').addEventListener('click',function(){

    updatePrice('memory-cost',300);


 });

// access ITB 

document.getElementById('ssd3').addEventListener('click',function(){
    // const extraStroge = document.getElementById('storage-cost').innerText;

    updatePrice('storage-cost',500);
    
})








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


