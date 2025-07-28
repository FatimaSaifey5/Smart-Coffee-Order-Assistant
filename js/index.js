// Part 1: 🔐 Login & Access Control
// Ask Role and Password
function login() { 
    let username = prompt('Please insert role:(admin/user)');
    let result= username.toLowerCase();
    //console.log(result);
    let password = Number(prompt('Please insert your password:(**34)'));
    var real_pass = 1234;
  if (result === 'admin' && password === real_pass)
  {
    alert('your role is admin so your security role is High');
       // goToAdminOrder(); // 🔁 Call admin function
        goToUsersOrder();
  }

  else if (result === 'user' && password === real_pass){
    alert('your role is user so your security role is Low');
      goToUsersOrder(); // 🔁 Call user function
  }
  else{
    alert('We are sorry! your Username & Password doesnot match');
   // return;
  }

}


/// Part 2: ☕ Coffee Shop Order Calculator 
/// Ask the Customer Detailes:
var price = 0;
var DiscAmaount = 0.1;
var discount = 0;
var price = 0;
var q = 0;
var ctype = '';
var customerName='';
function goToUsersOrder() {
  customerName = prompt('Please insert customer name:');
  var age = Number(prompt('Please insert customer age:'));
  ctype = prompt('Type of Coffee: espresso/ latte/ cappuccino');
  q = Number(prompt('Quantity of cups:'));
  

  switch (ctype) {
    case "espresso":
      price = q * 2.5;
      break;
    case "latte":
      price = q * 3.5;
      break;
    case "cappuccino":
      price = q * 4.0;
      break;
    default:
      alert("Invalid coffee type!");
      return;
  }

  if (age <= 18 || age >= 60) {


    let DiscAmaount = 0.1;
    discount = (price * DiscAmaount).toFixed(2); 
   // var FinalTotal = price - discount;     //alert('total '+price);
    alert ('She/he has received 10% discount because of her/his age🙂');
    
   SplittingBilling();

  } 
  else 
    {

    SplittingBilling();
  
  }
}

//Part 3: 🧾 Bill Splitter with Tip
// Ask about how many people and how much tips
function SplittingBilling()
{
  let Tip = 0;
  let OriginalTotal = price;
 
 // alert (OriginalTotal + 'your original totla');
  let numberOfCostumer = Number(prompt('How many people are splitting the bill (1, 2, or 3)?'));
  let TipPercentage = Number(prompt('Please Enter tip percentage (0, 5, 10, or 15):'));
  Tip = (TipPercentage * OriginalTotal)/100;
  let TotalWithTip = OriginalTotal + Tip;
  let EachPeople = (TotalWithTip - discount)/numberOfCostumer;
  alert('Hello '+customerName+ '\n' + 
        'you ordered:'+q+ ' cup/s of '+ ctype+'\n'+
        'Original Total: $'+OriginalTotal+'\n'+
        'Discount: '+discount+'\n'+
        'Tip: '+ Tip+'\n'+
        'Total with Tip: $'+TotalWithTip+'\n'+
        'Split between '+ numberOfCostumer+ ' people: $'+EachPeople.toFixed(2)
  );

}

// function goToAdminOrder()
// {
//    alert ('You have more control on this system!');
//    return;
// }
