// code your solution here

// saturdayFun function declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// mondayWork function expression
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// wrapedAdjective function
function wrapAdjective(wrapper ="*") {
    return function(adjective = "special") {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    }
}

// Testing the functions
console.log(saturdayFun()); // This saturday, I want to roller-skate!
console.log(saturdayFun("bathe my dog")); // This Saturday, I want to bathe my dog!

console.log(mondayWork()); // This Monday, I will go to the office.
console.log(mondayWork("work from home")); // This Monday, I will work from home.

const wrapInStars = wrapAdjectives('*')
console.log(wrapInsTARS("a hard worker")) // You are *a hard worker*!

const wrapInPipes = wrapAdjectives('||');
console.log(wrapInPipes("a dedicated programmer")) // You are ||a dedicated programmer||!

