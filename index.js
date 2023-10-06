// Iteration 1: Names and Input
let hacker1;
hacker1="Luka"
console.log (`The driver's name is ${hacker1}`);
let hacker2;
hacker2="Luke"
console.log (`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);

}else if (hacker1.length < hacker2.length){
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

}else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
};


// Iteration 3: Loops

let splittedName = "";

for (let i = 0; i < hacker1.length; i++){

    splittedName += " " + hacker1[i].toUpperCase();
}

console.log (splittedName);

let reversedName= "";

for (let i = hacker2.length - 1; i >= 0; i--){
 reversedName += hacker2[i]
}

console.log (reversedName);

/* Demanded ==> Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?

for comparing two strings, it can be used :

Description
The localeCompare() method compares two strings in the current locale.

The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).

The current locale is based on the language settings of the browser.

Syntax
string.localeCompare(compareString)
Parameters
Parameter	Description
compareString	Required.
The string to compare with.

return value 	One of 3 values:

-1 if the string is sorted before the compareString
 0 if the two strings are equal
 1 if the string is sorted after the compareString
*/


if (hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first.")
}else if(hacker1.localeCompare(hacker2) > 0){
    console.log("Yo, the navigator goes first, definitely.")
}else{
    console.log("What?! You both have the same name?")
}
