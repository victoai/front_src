//alert("js");

function calPrice(obj){ // 매개변수명은 정하기 나름 , 변수명 임
    //수량확인
    //alert( obj.value);  
    // "" -> parseInt("") =>NaN 
    // NaN *1000 =>  NaN
    let qty = (obj.value=="")?0: parseInt(obj.value);   // 수량      
    let qtyTd  = obj.parentElement;
    //alert( qtyTd);
    let unitTd = qtyTd.previousElementSibling;
    let priceTd  = qtyTd.nextElementSibling;
    //단가정보
    let unit =  parseInt(unitTd.innerText);
    //금액반영
    let price  = qty *  unit;
   // alert( price);
    priceTd.innerText =price;

    //합계금액 구해줘
    orderPrice();
}
 
//
function deleteItem(){
    let cart  = document.querySelector("#cart");
    let items  = cart.querySelectorAll("input[type='checkbox']");
    
    for( let i=0; i< items.length ;i++){
        let item  = items[i];
        if( item.checked){
            // 체크박스가 포함 행 ( tr)
            let tr = item.parentElement.parentElement;  // 삭제할 행 선택 
            cart.removeChild(tr);
        }
    }
    //합계금액 구해줘
    orderPrice();
}


function orderPrice(){
   let trs  = document.querySelectorAll("#cart tr");
   let sum=0;
   for( let i=0; i< trs.length ; i++){
    // 각 tr 선택
         let tr = trs[i];
         let priceTd= tr.lastElementChild;
         let price = parseInt( priceTd.innerText);
         sum+=price;
   }
   // alert( "sum=" + sum);

   //합계금액 영역 선택
   let order_price  = document.querySelector("#order-price");
   order_price.innerText=sum;
}




