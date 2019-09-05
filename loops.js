// for (i= 0;i < 10; i++){
//     console.log(i)
// }
// //loops start with for. i = 0 is the starting point
// for (i= 9;i > -1; i-- ){
//     console.log(i)
// }
// //cannot use = it must be >-

let favoriteDrinks =[
    "Water",
    "Sweet Tea",
    "Fanta No Ice",
    "Ginger Beer",
    "Sprite"
]
favoriteDrinks.push("Ting","Rum&Blacks")
//console.log(favoriteDrinks)

for (drinksIndex=0; drinksIndex < favoriteDrinks.length; drinksIndex++){
    console.log(favoriteDrinks[drinksIndex])
}
//i created an array(the list of drinks) then i added 2 more to the list with .push
//and first displayed that to the log by consolling it in then created a loop which 
//extracted and displayed my list

const drinkCheck = () => {
if (favoriteDrinks[2] == "sprite"){
    console.log("enjoy your Sprite");
}
else {
  console.log ("Boo!,we want Sprite")
    }
}

drinkCheck()