
 document.getElementById('sixteenGB').addEventListener('click',function(){

    updatePrice('memory-cost',300);


 });



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

let fakeCode = 'phero';
document.getElementById('apply-btn').addEventListener('click',function(){
    const inputText = document.getElementById('promo-input').value;

    if(inputText ===fakeCode){
       const total = document.getElementById('total-price');
       let totalPrice = parseInt(total.innerText);

       //discount 

       const discount = (totalPrice*20)/100;

       totalPrice =  totalPrice - discount ;

       total.innerText = totalPrice;

     

}else{
    alert('please select right code');
}
    
})