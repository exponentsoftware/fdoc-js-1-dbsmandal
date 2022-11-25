const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

const countWords=(paragraph)=>{

    const arr=paragraph.split(" ");
    return arr.filter(word=>word !=="").length

}
console.log("first count ",countWords(paragraph));


const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;


const cleanText=(sentence)=>{
  let  arr=sentence.replace(/[^a-zA-Z. ]/g, "");
    return arr;

}
console.log("clean text is :",cleanText(sentence));
const sentence1 =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`

console.log("2nd count",countWords(sentence1));


function triangle(symble){
    var line = "";

    var i;
    var j;
    for (i=0; i< symble; i++) {
        for (j=0; j<=i; j++) {
           line +="#"
        }
        line+="\n";

     }
     return line + "\n";

}

console.log(triangle(3));


function sevenRandomNumbers(n) {

    var array = [];
    // Store possibilities in the numbersArr array
    var numbersArr = [];
  
    // n is the max number you can choose to appear on a ball
    for ( var i = 0; i < n; i++ ) { 
      numbersArr.push(i);
    }
  
    while (array.length < 7){
       var randomIndex = Math.floor(Math.random() * numbersArr.length);
       array.push(numbersArr[randomIndex]);
       numbersArr.splice(randomIndex, 1);
    }
  
    return array;
  }

  console.log(sevenRandomNumbers(9))
  console.log(sevenRandomNumbers(25))


  const reverseArray=(array)=>{
    let myReverseArray=array.splice("").reverse()
    return myReverseArray

  }
  console.log(reverseArray([4,5,6,4,7,8,9]))
  console.log(reverseArray([1,2,3,4,5]))
  console.log(reverseArray(["A", "B", "C"]));
  
