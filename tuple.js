// 01 syntex of tuple 
var myTuple = ["BISMA", 22, true];
console.log(myTuple);
// 02 syntex of tuple 
var ourTuple;
ourTuple = ["Madiha", false, 21];
console.log(ourTuple);
//03 syntex of tuple(simple Tuple)
var tupleOne = ["Bisma", 76, true];
console.log(tupleOne);
// types of tuple
// 01 readonly (keyword)
var tuple = ["khatija", 96, true]; // data type is not change
var tupleTwo; // values is not change
console.log(tuple);
console.log(tupleTwo);
// 02 tuple Array
var tupleArray = [["Afsheen", 22], ["Hamza", 30], ["Madiha", 24]];
// 03 named tuple
var namedTuple;
namedTuple = [["Bilal", 1], ["jaweria", 2], ["hadiqa", 3]];
// destructuring tuple
var tupledemo = ["adil", 2];
var x = tupledemo[0], y = tupledemo[1];
// updating Tuple
var updatingTuple = ["Hello World", true];
updatingTuple[0] = "tuple";
// Methods 
// push
var pushTuple = ["haziq", false]; //add element in the last
pushTuple.push("muskan");
// pop
var popTuple = ["hasnain", 34]; //remove last element
popTuple.pop();
// console.log(popTuple)
// shift
var shiftTuple = ["mango", 2, false, "strawberry"]; //remove first element
shiftTuple.shift();
// unshift
var unshhiftTuple = ["black", 3, "red", "yellow"]; //add element to the first position
unshhiftTuple.unshift(4);
// console.log(unshhiftTuple)
// slice 
var sliceTuple;
sliceTuple = ["orange", 3, false, "white", 5];
// console.log(sliceTuple.slice(1,4))
// splice
var spliceTuple; // add, remove and replace
spliceTuple = ["white", 1, true, "black", 2];
//                           start     deletation       item
// console.log(spliceTuple.splice(1,        3,            "bisma"))
// console.log(spliceTuple)
// length
var lengthTuple;
lengthTuple = ["mango", 3, false, "kiwi", 5];
// console.log(lengthTuple.length)
// concat()
var concatTuples = ["orange", 4];
// concatTuples[0] = concatTuples[0].concat(" Color")
// console.log(concatTuples[0])
// console.log(concatTuples[0] + " color"  )
