const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

const countWords = (paragraph) => {

  const arr = paragraph.split(" ");
  return arr.filter(word => word !== "").length

}
console.log("first count ", countWords(paragraph));


const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;


const cleanText = (sentence) => {
  let arr = sentence.replace(/[^a-zA-Z. ]/g, "");
  return arr;

}
console.log("clean text is :", cleanText(sentence));
const sentence1 = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`

console.log("2nd count", countWords(sentence1));


function triangle(symble) {
  var line = "";

  var i;
  var j;
  for (i = 0; i < symble; i++) {
    for (j = 0; j <= i; j++) {
      line += "#"
    }
    line += "\n";

  }
  return line + "\n";

}

console.log(triangle(3));


function sevenRandomNumbers(n) {

  var array = [];
  // Store possibilities in the numbersArr array
  var numbersArr = [];

  // n is the max number you can choose to appear on a ball
  for (var i = 0; i < n; i++) {
    numbersArr.push(i);
  }

  while (array.length < 7) {
    var randomIndex = Math.floor(Math.random() * numbersArr.length);
    array.push(numbersArr[randomIndex]);
    numbersArr.splice(randomIndex, 1);
  }

  return array;
}

console.log(sevenRandomNumbers(9))
console.log(sevenRandomNumbers(25))


const reverseArray = (array) => {
  let myReverseArray = array.splice("").reverse()
  return myReverseArray

}
console.log(reverseArray([4, 5, 6, 4, 7, 8, 9]))
console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(["A", "B", "C"]));

// const checkUniqueness = (array) => {
//   let uniqueArray = [];
//   if (array.length > 0) {
//     uniqueArray[0] = array[0];
//   }

//   for (let i = 0; i < array.length; i++) {
//     let isExist = false
//     for (let j = 0; j < uniqueArray.length; j++) {
//       if (array[i] == uniqueArray[j]) {
//         isExist = true;
//         break;
//       }
//       else {
//         isExist = false;
//       }
//     }
//     if (isExist == false) {
//       uniqueArray[uniqueArray.length] = array[i];
//     }
//   }
//   return uniqueArray
// }


// const checkUniqueness = (array) => {
//   let myArray = new Set(array)
//   for(let i=0; i<myArray.length; i++){
//     for(let j=i+1;j<array.length; j++){
//       if (array == myArray) {
//         return false
//         // console.log(false)
//       }else{
//         return true
//         // console.log(true)
//       }
//     }
//   }
//   return myArray

// }


const checkUniqueness = (array) => {
  let myArray = Array.from(new Set(array))
  // console.log("myArray length", myArray.length)
  // console.log("array length", array.length)
  // console.log("3", myArray)
  // console.log("4", array)
  if (array.length == myArray.length) {
    return true
    // return true || myArray
  } else {
    return false
    // return false || myArray

  }
}
const arrOne = [1, 4, 6, 2, 1];
console.log("arrOne",checkUniqueness(arrOne));

const arrTwo = [1, 4, 6, 2, 3]
console.log("arrTwo",checkUniqueness(arrTwo));
const arrThree = [1, 4, 6, 2, 3,5,7,8,3]
console.log("arrThree",checkUniqueness(arrThree));

const arrFour = ["dipak","goutam","sampa","goutam"]
console.log("arrFour",checkUniqueness(arrFour));