/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------
var a

function max(x, y){
    var a=Math.max(x,y);
    return var a;
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
var a
function maxOfThree(x, y, z){
    var a=Math.max(x, y, z);
    return var a;
    
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
function isVowel(char){
    var vowels = [a, e, i, o, u];
    for(var numchar=0; numchar <vowels.length; numchar++){
         if(char === vowels[numchar]){
            return true;
         
    }
};

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------
f
var numbers = [1 ,2 ,3 ,4];
function sum(){
    var total=0;
    for (var count = 0, count < numbers.length);{
         total += numbers[count++];
     }
};
console.log(total);

var numbers = [1, 2, 3, 4];
function multiply(){
    var total=1;
    for (var count = 0 , count < numbers.length);{
        total = total * numbers[count];

    }

    

};

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
     
    var name= "gixmo"
 
    var Reverse= name.split("").reverse().join("");
};
console.log(reverse);
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
var longwords = ["next", "september", "or", "discombobulate"];
function findLongestWord(words){
    var longest;
    for(var words = 0; words < longwords.length; words++); {
        if(longwords[words].length > longest.length){
            longest=longwords[words];

        }
    }
    //...
};
console.log(longest);

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
var words = ["the", "ugly", "conquest", "extra"];
var i
var greaterThanI
function filterLongWords(words, i){
    for(var i = x;  i < words.length;) {
        greaterThanI = words;
    }

    
}
consle.log(greatertThanI);
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------
var charFreq = ["abbabcbdbabdbdbabababcbcbab"];

function charFreq(string){
    var next;
    var i = 0;
    var frequencies = {};
    L = frequencyString.length;
    while(i<L){
        next = frequencyString.charAt(i++);
        if(!frequencies[next]) frequencies[next]=0;
        ++frequencies[next];

        return frequencies
    }
    



















    //...