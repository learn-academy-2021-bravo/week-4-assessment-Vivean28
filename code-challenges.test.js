// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


//Create a function called shuffel 
//parm (array)
// First remove the first index in the array
// Then mix the rest of the array
//I first used the shift() method to remove the frist index of array
//Then I looped through the array 
// assign a 


// b) Create the function that makes the test pass.
describe("shuffel", () =>{
    var colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

    let outPut1 = ["blue", "green", "yellow", "pink"].sort()
    let outPut2 = ["indigo", "periwinkle", "ochre", "aquamarine", "saffron"].sort()
    it("return remove the first array and then shufflel", () =>{
        expect(shuffel(colors1)).toEqual(outPut1)
        expect(shuffel(colors2)).toEqual(outPut2)
    })
})

const shuffel = (array) =>{
   array.shift()
    // console.log(array)
    // return randized array
    for(let i = array.length - 1; i>0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        // console.log(newArray)
    }
      // return randized array
    return  array
}
// console.log(shuffel(colors1))
// (4) ["pink", "blue", "green", "yellow"] this is what I got when I tested it 


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.


//I need to create a function called minAndMax
//My function will have a parameter of array of numbers (array)
//I need to return an array of minimum and maximum numbers in that order.
//If my input is an array and I need to change my array I use the .filter() method, because it returns an array 

//Notes just for me 
//I looked this up and was trying to make it work this way but could not figure out for now.
//there are built in methods called Math.min() and Math.max and in order for them to work on an array data type, I must use the the spread operator ex... Math.min(...array)// for(let i = 0; array.length; i++){
//         if(array.Math.max(...array)){
//Notes just for me end here


// a) Create a test with expect statements for each of the variables provided.

//I need to create a function called minAndMax
//My function will have a parameter of array of numbers (array)
//I need to return an array of minimum and maximum numbers in that order.
//If my input is an array and I need to change my array I use the .filter() method, because it returns an array 
describe("minAndMax", () =>{
var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]

    it("return minimum and maximum numbers in that order", () =>{
        expect(minAndMax(nums1)).toEqual([-8, 90])
        expect(minAndMax(nums2)).toEqual([-59, 109])
    })
})


// var nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
// var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

// b) Create the function that makes the test pass.
//I need to create a function called minAndMax
//My input is an array 
//My output is also an array with only the  minimum and maximum numbers in that order.


// const minAndMax = (array) =>{
//     let filteredArray = array.filter(value, index) => {
//         if(){

//         }
//         return value
//     }
    
// const minAndMax = (array) => {
//         let filterdArray = array.filter(value, index) =>{
//             if(array )
//             return 
//         }
//     return  filterdArray
// }
// minAndMax(nums2)







// // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// // a) Create a test with an expect statement using the variables provided.
// Create a function called noDuplicate
// that takes in two arrays as arguments (array1, array2)
// returns one array with no duplicate values


var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

fdescribe("noDuplicate", () =>{
    var testArray1 = [3, 7, 10, 5, 4, 3, 3]
    var testArray2 = [7, 8, 2, 3, 1, 5, 4]
    // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
    
        it("return minimum and maximum numbers in that order", () =>{
            expect(noDuplicate(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
        })
    })
    var testArray1 = [3, 7, 10, 5, 4, 3, 3]
    var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// b) Create the function that makes the test pass.
    const noDuplicate = (array1, array2) =>{
    //first, I am going to make both arrays in one 
    // by assigning both array to one using the concat method
        // let combinedArray = [].concat(array1, array2)
        // let combinedArray = [...array1, ...array2] //This is for the spread operator 
        // I got back [3, 7, 10, 5, 4, 3, 3, 7, 8, 2, 3, 1, 5, 4]

        //now I have to take out the duplicates
        //here I am going to use the new Set()
        // this will take my array and it will return only the unique values
        let set = new Set([...array1, ...array2]) //when doing this, it is NOT an ARRAY anymore
        //to fix that issue, I need to convert it into an array
        // here I am going to use the spread operator to expand the set into it's elements
        let finalArray = [...set]
        return  finalArray
    }
     console.log(noDuplicate(testArray1, testArray2))
   

