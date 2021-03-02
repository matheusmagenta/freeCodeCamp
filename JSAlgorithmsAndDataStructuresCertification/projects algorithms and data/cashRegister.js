/* 

JavaScript Algorithms and Data Structures Projects: Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
 */

// reference: https://floating-point-gui.de/languages/javascript/

function checkCashRegister(price, cash, cid) {
  
    var coinsAndBills = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ]
  
    // calculate the change
    console.log("price: ", price)
    console.log("cash: ", cash)
    var change = cash - price
    console.log("change: ", change)       
    
    // look into cash register if there is sufficient funds
    var balance = 0
    for(let i = 0; i < cid.length; i++){
      balance = balance + cid[i][1]
    }
    balance = (Number(balance).toPrecision(4))
    console.log("balance: ", balance)

    // CHECK INSUFFICIENT FUNDS (RETURN)
    // check if cash-in-drawer is less than the change due, or if you cannot return the exact change
    if(change > balance){
      return {status: "INSUFFICIENT_FUNDS", change: []}  
    }

    //CHECK CLOSED (RETURN)
    // check if the value for the key change if it is equal to the change due
    if(change == balance){
      return {status: "CLOSED", change: cid}
    }
        
  
  
    // console.log("cid: ", cid)
    var remain = change

    var toReturn = []

    var i = cid.length - 1;

    while(remain > 0 && i >= 0){
      //console.log(cid[i])
      console.log("remain before if: ", remain)
      if(remain >= coinsAndBills[i][1]){
        remain -= coinsAndBills[i][1]
        toReturn.push(coinsAndBills[i])
        console.log("toReturn: ", toReturn)
        remain = (Number(remain).toPrecision(4))
        console.log("remain after if: ", remain)
        cid[i][1] -= coinsAndBills[i][1]
        console.log("cid[i][1] after if: ", cid[i][1])
        if(cid[i][1] == 0){
          i--
        }
        if(cid[i][1] < 0){
          return {status: "INSUFFICIENT_FUNDS", change: []}  
        }     
      } if (remain < coinsAndBills[i][1]&& i >= 0){
        i--
        continue
      } 

    }

    console.log("toReturn: ", toReturn)   

    var changeSplittedFlatted = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
    
    for(let i = 0; i < toReturn.length; i++){
      for(let j = 0; j < changeSplittedFlatted.length; j++){
        if(toReturn[i][0] == changeSplittedFlatted[j][0]){
          //console.log(paymentTestSplitted[i])
          changeSplittedFlatted[j][1] += toReturn[i][1]
        }
      }
    }
    changeSplittedFlatted = changeSplittedFlatted.filter(element => element[1] > 0).reverse()

    console.log("changeSplittedFlatted: ", changeSplittedFlatted)
    //console.log("cid after cash in:", cid)
    
    return {status: "OPEN", change: changeSplittedFlatted}

}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
 /* xxxxxxxxxxxxxxxxxxxxxxx



  var paymentTest = 156.02
  var paymentTestSplitted = [];

  var coinsAndBills = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.10],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ]

  // split payment into drawers  
  var i = coinsAndBills.length - 1;
  while(paymentTest > 0 && i >= 0){
    if (paymentTest >= coinsAndBills[i][1]) {
      //console.log("paymentTest before transaction: ", paymentTest)
      paymentTest -= coinsAndBills[i][1]
      paymentTestSplitted.push(coinsAndBills[i])
      paymentTest = (Number(paymentTest).toPrecision(4))
      //console.log("paymentTest after transaction: ", paymentTest)
      //console.log("paymentTestSplitted: ", paymentTestSplitted)
      continue
    } 
    if (paymentTest < coinsAndBills[i][1] && i >= 0){
      i--
      continue
    } 
  }

  // add splited payment into drawers
  var cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]

  //console.log("cid before cash in:", cid)
  
  for(let i = 0; i < paymentTestSplitted.length; i++){
    for(let j = 0; j < cid.length; j++){
      if(paymentTestSplitted[i][0] == cid[j][0]){
        //console.log(paymentTestSplitted[i])
        cid[j][1] += paymentTestSplitted[i][1]
      }
    }
  }

  //console.log("cid after cash in:", cid)

  // split a value that will go out of cash register

    var value = 96.02
    var paymentTestSplitted2 = []
    var i = coinsAndBills.length - 1;
    while(value > 0 && i >= 0){
    if (value >= coinsAndBills[i][1]) {
      //console.log("paymentTest before transaction: ", paymentTest)
      value -= coinsAndBills[i][1]
      paymentTestSplitted2.push(coinsAndBills[i])
      value = (Number(value).toPrecision(4))
      //console.log("paymentTest after transaction: ", paymentTest)
      //console.log("paymentTestSplitted: ", paymentTestSplitted)
      continue
    } 
    if (value < coinsAndBills[i][1] && i >= 0){
      i--
      continue
    } 
  }

  //console.log(value)

  // console.log(paymentTestSplitted2)

  // take the money out
  var cid2 = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]

  var wallet
  console.log("cid2 before cash out:", cid2)
  
  for(let i = 0; i < paymentTestSplitted2.length; i++){
    for(let j = 0; j < cid2.length; j++){
      if(paymentTestSplitted2[i][0] == cid[j][0]){
        //console.log(paymentTestSplitted[i])
        cid2[j][1] += paymentTestSplitted2[i][1]
      }
    }
  }
  
  console.log("cid after cash out:", cid2)
  // calculate the change

  // refresh the drawers after change

  // return status of drawers */