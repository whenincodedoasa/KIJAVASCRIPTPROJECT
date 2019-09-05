let age = "Please Pick Option"

if (age < 18){
    console.log ("Please Pay: Child Fare = £8.00 ")
}
else if (age >= 18 && age <= 60){
    console.log ("Please Pay: Adult Fare = £10.95")
}
else if (age >= 60){
    console.log ("Please Pay: Senior Fare = £7.50")
}
else {
    console.log ("Please select relevant ticket");
}
