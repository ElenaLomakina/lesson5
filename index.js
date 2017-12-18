// -- Task 1. Exchange of currency ----------------------------------------------------------------------

var cur1, cur2, sum1, sum2;
var rateUSD = 28;
var rateEUR = 33;

var change = {
    "USD": {
        "USD": 1,
        "EUR": rateUSD / rateEUR,
        "UAH": rateUSD
    },
    "EUR": {
        "USD": rateEUR / rateUSD,
        "EUR": 1 ,
        "UAH": rateEUR
    },
    "UAH": {
        "USD": 1 / rateUSD,
        "EUR": 1 / rateEUR,
        "UAH": 1
    }
};

var curNames = Object.keys(change);

function exchange( from, to) {
    return Math.round( change[from][to] * sum1 * 100) / 100;
}

cur1 = prompt("Choose the currency you want to exchange: USD, EUR, UAH");
cur2 = prompt("Choose the currency to which you want to change: USD, EUR, UAH");
sum1 = prompt("Enter your sum");

var isCorrect1 = curNames.some(function(cur){
    return cur1 === cur;
});

var isCorrect2 = curNames.some(function(cur){
    return cur2 === cur;
});

var isCorrect = isCorrect1 && isCorrect2;

if (!isCorrect) {
    alert("Sorry, we can not exchange this currency");
}
else{
    if (isNaN(Number(sum1))) {
        alert("Sum is not a number")
    }
    else{
        sum2 = exchange(cur1, cur2);
        alert( sum1 +" " + cur1 + " is " + sum2 + " " + cur2);
    }
}


// --Task 2. Create of Army --------------------------------------------------------------------------------

var myArmy = [];


// a.  Adding resources to myArmy --------------------------------------------------------------------------

function addResource(type, name, health, livesLeft, livesMax, distAvailable, distMax) {
    var obj = {
        "type": type,
        "name": name,
        "health": health,
        "livesLeft": livesLeft,
        "livesMax": livesMax,
        "distanceAvailable": distAvailable,
        "distanceMax": distMax
    };
    myArmy.push(obj);
}


// b. function check, can the whole my army move on or not.  -----------------------------------------------

function canMoveOn() {
    var canMove = myArmy.every(function(obj){return obj.distanceAvailable > 0;});
    return canMove? "You can move on." : "You can't move on today. You have reached your limit.";
}


// c. function enlarges  health to max for i-element of army, or for each elements, if "i" wasn't pointed ---

function getHealth(i) {
    if (i === undefined) {
        myArmy.forEach(function(obj){obj.health = 1;} );
    }
    else {
        var obj = myArmy[i];
        obj.health = 1;
    }
}


// d. function enlarges available distance to max for i-element of army, or for each elements, if "i" wasn't pointed -

function getRest(i) {
    if (i === undefined) {
        myArmy.forEach(function(obj){obj.distanceAvailable = obj.distanceMax;} );
    }
    else {
        var obj = myArmy[i];
        obj.distanceAvailable = obj.distanceMax;
    }
}


// e. --


//--------------- check ------------------
addResource("warrior", "Vedmak", 0.7, 5, 7, 3, 10);
addResource("horse", "Bolivar", 0.5, 1, 3, 30, 50);
addResource("car", "Bumblebee", 0.6, 6, 10, 300, 500);

console.log(myArmy);
console.log(canMoveOn());

getHealth(0);
getRest(2);
