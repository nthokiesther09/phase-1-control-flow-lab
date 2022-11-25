function scuberGreetingForFeet(ride){
let fee = 0
  if (ride <= 400){
  return'This one is on me!';
} else if (ride>2000 && ride <= 2500){
  fee+=30;
  return 'I will gladly take your thirty bucks.';
} else if (ride>2500){
  return 'No can do.';}
}
  
  // Write your code here!


function ternaryCheckCity(city){
  if (city === 'NYC'){
  return 'Ok, sounds good.';
} else if (city !== 'NYC'){
 return 'No go.';
}
}


function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
      return 'Thank you so much.';
      case "not as generous":
        return 'Thank you.';
        default:
          return 'Bye.';
  }
  // Write your code here!
}