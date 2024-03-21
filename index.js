let ride, city, tip;

function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400) {
    return "This one is on me!";
  } else if (ride > 400 && ride <= 2000) {
    return "That will be twenty bucks.";
  } else if (ride>2000 && ride<=2500) {
    return "I will gladly take your thirty bucks.";
  } else if(ride>2500){
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  const response = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return response;
}

function switchOnCharmFromTip(tip) {
  // Write your code here!

  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}

let greeting = scuberGreetingForFeet(150);
let cityResponse = ternaryCheckCity("Nairobi");
let tipResponse = switchOnCharmFromTip(50);

console.log(greeting);
console.log(cityResponse);
console.log(tipResponse);