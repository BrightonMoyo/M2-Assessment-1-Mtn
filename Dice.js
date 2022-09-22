function rolling_die(){
   var num6 = 6;
   var num5 = 5;
   var num4 = 4;
   var num3 = 3;
   var num2 = 2;
   var num1 = 1;
   
   let rolling = Math.floor(Math.random() *  6) + 1;
   console.log('Rolled result:' + rolling);
   if (num6 == rolling){
    console.log("MTN Business App of the Year 2022 Best Category Winner is GAMING SOLUTION ");
   }
  
   else if(num1 == rolling){
    console.log("MTN Business App of the Year 2022 Best Category Winner is HEALTH SOLUTION");
   }
   else if(num5 == rolling){
    console.log("MTN Business App of the Year 2022 Best Category Winner is AFRICAN SOLUTION");
   }
   else if(num4 == rolling){
    console.log("MTN Business App of the Year 2022 Best Category Winner is CONSUMER SOLUTION");
   }
   else if(num3 == rolling){
    console.log("MTN Business App of the Year 2022 Best Category Winner is INNOVATIVE SOLUTION");
   }
   else if(num2 == rolling){
    console.log("MTN Business App of the Year 2022 Best Category Winner is FINANCIAL SOLUTION ");
   }

}

function throwing_dice() {
    rolling_die();
     
}

throwing_dice()