// 01 syntex of tuple 
let myTuple : [String, number, boolean ] = ["BISMA" , 22 , true];
    console.log(myTuple)
    
    // 02 syntex of tuple 
    let ourTuple : [String, boolean, number ]
    ourTuple = ["Madiha", false , 21];
    console.log(ourTuple)
    
    //03 syntex of tuple(simple Tuple)
    let tupleOne = ["Bisma" , 76 , true];
    console.log(tupleOne)
    
    // types of tuple
    
    // 01 readonly (keyword)
    let tuple : readonly[string, number, boolean] = ["khatija", 96 , true] // data type is not change
    console.log(tuple)
    
    
    // 02 tuple Array
    let tupleArray : [string, number,][] = [ ["Afsheen", 22] , ["Hamza" ,30 ], ["Madiha" , 24] ]
    console.log(tupleArray)
    
    // 03 named tuple
    let namedTuple : [studentName : string , rollno : number][]
    namedTuple = [ ["Bilal" , 1] , ["jaweria" , 2] , ["hadiqa" ,3] ];
    console.log(namedTuple)
    
    // destructuring tuple
    let tupledemo : [String, number] = ["adil" , 2]
    let [x , y]= tupledemo
    console.log(tupledemo)


    // updating Tuple
    let updatingTuple : [ string , boolean] = ["Hello World" , true]
    updatingTuple[0] = "tuple"
    console.log(updatingTuple)

// Methods 

// push
let pushTuple : [ string , boolean] = ["haziq" , false ]//add element in the last
pushTuple.push("muskan") 
console.log(pushTuple)

// pop
let popTuple : [ string , number] = ["hasnain" , 34 ]//remove last element
popTuple.pop()
console.log(popTuple)


// shift
let shiftTuple = ["mango", 2 , false, "strawberry"] //remove first element
shiftTuple.shift()
console.log(shiftTuple)

// unshift
let unshhiftTuple = ["black" , 3, "red" , "yellow"] //add element to the first position
unshhiftTuple.unshift(4)
console.log(unshhiftTuple)

// slice 
let sliceTuple : [string , number, boolean, string, number]
sliceTuple = ["orange" , 3, false , "white" , 5]
console.log(sliceTuple.slice(1,4))

// splice
let spliceTuple : [string , number, boolean, string, number]// add, remove and replace
spliceTuple = ["white", 1, true, "black", 2]
//                           start     deletation       item
console.log(spliceTuple.splice(1,        3,            "bisma"))
console.log(spliceTuple)


// length
let lengthTuple : [string , number, boolean, string, number]
lengthTuple = ["mango" , 3, false , "kiwi" , 5]
console.log(lengthTuple.length)

// concat()
let concatTuples : [string , number] = [ "orange", 4]
concatTuples[0] = concatTuples[0].concat(" Color")
console.log(concatTuples[0])
   
//second syntex of concat 
console.log(concatTuples[0] + " color"  )



