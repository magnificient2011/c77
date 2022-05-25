var first_name="Ariana";
var last_name="bhatia";
var full_name=first_name.concat(last_name);
document.getElementById("A1").innerHTML=full_name;
console.log(full_name);
var fruits=["starwberry","melon","mango"];
fruits.push("Watermelon");
fruits.unshift("grapes");
fruits.pop();
document.getElementById("A2").innerHTML=fruits;
console.log(fruits);
var numbers=["2940185","1","8","999","7"];
var maxnumber=Math.max.apply(Math,numbers);

document.getElementById("A3").innerHTML=maxnumber;
console.log(maxnumber);