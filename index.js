
function saturdayFun(ar1 = "roller-skate") {
    
  return (`This Saturday, I want to ${ar1}!`);
}
saturdayFun(ar1);
saturdayFun();


function mondayWork(ar2 = "go to the office"){

  return (`This Monday, I will ${ar2}.`)
    }

mondayWork(ar2);
mondayWork();
/*let result = "*"
let emphatic = result("a hard worker"); */

function wrapAdjective(result = "*"){
   const adj = function(emphatic = "special"){
    return `You are ${result}${emphatic}${result}!`
}
    return adj;
}
