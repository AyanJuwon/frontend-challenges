let price1;
let price2;
let price3;

let btnclicked;

$(document).ready(function()
{
   
    $('.switcharea').click(function(){
        // console.log('is clicked')
        $(".switchbtn").toggleClass('switchclicked')
        
    })
}




);

function changeprice(){



price1 = document.getElementById('price1')
    price2 = document.getElementById('price2')
    price3 = document.getElementById('price3')
    // console.log(price1)
        // console.log(price2)
        brnclicked = false
        if(!btnclicked){
  price1.textContent = "$19.99";
  price2.textContent = "$24.99";
  price3.textContent = "$39.99";
        
       
        btnclicked = true}
        else if(btnclicked==true){
             price1.textContent= '$199.99'
        price2.textContent= '$249.99'
        price3.textContent= '$399.99'
        btnclicked = false
        }
        




}

