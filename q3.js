// Q3: 1
class Exams {
  constructor (mathGrad, physicsGrad, artGrade,studentName){
    this.mathGrad = mathGrad;
    this.physicsGrad = physicsGrad;
    this.artGrade = artGrade;
    this.studentName = studentName;
  }
}
function sumObjectValues(summationObject) {
  let sumResult = 0;
  for (const key in summationObject) {
    if(Object.hasOwn(summationObject, key) && !isNaN(summationObject[key])){
          sumResult+=summationObject[key];
    }
  }
  return sumResult;
}
console.log(sumObjectValues(new Exams(10,10,15,"rimon")));

//////////////////////////////////////////////////////////////////////////////
//Q3.2 :
const asyncPromise = (state) => {
  return new Promise((resolve, reject) => {
    if(state) resolve('q3.2 success');
    else reject('q3.2 failure');
  });
}

let callingAsync = asyncPromise(true);
callingAsync.then((data => console.log(data)))
.catch(error => console.log(error));


/////////////////////////////////////////////////////////////////////////////
//q3.3
let arrQ3point3 = [ 1,25, 10 , 100, 200 , 3]; // max = 200 with index  = 4
const GetMaxNumberWithIndex = (inputArray) => {
  let max = null;
  let index = -1;
  inputArray.forEach((element, i) => {
    if(max == null){
      max = element; 
      index = i;
    }
    if(element > max){
      max = element;
      index = i;
    }
  });
  console.log(`the maximum number is : ${max} and it's index is ${index}`);
}
GetMaxNumberWithIndex(arrQ3point3);



////////////////////////////////////////////////
// Q3.4
function getDiffInDaysBetweenDates(inputDate1, inputDate2){
  const date1 = new Date(inputDate1);
  const date2 = new Date(inputDate2);
  const diffInDays = (Math.abs(date1 - date2)) / (1000 * 60 *60 *24);
  console.log(`Different Between Dates in days : ${diffInDays}`)
}
getDiffInDaysBetweenDates('1/1/2022', '1/15/2022' );


///////////////////////////////////////////////////////
//Q3.5
class Calulator {
  constructor(number1, number2){
    this.number1 = number1;
    this.number2 = number2;
  }
  sum() {
    return this.number1 + this.number2;
  }
  difference() {
    return this.number1 - this.number2;
  }
  product() {
    return this.number1 * this.number2;
  }
  dividend() {
    return this.number1 / this.number2;
  }
}

///////////////////////////////////////////////////////
//Q3.6
const returnMultiple= () => {
  return [10 , 12 ] ;
}
const [return1, return2]  = returnMultiple();

console.log(return1  +" "+ return2);

//////////////////////////////////////
//Q3.7
const inputArrQ3point7 = [1,2,3,4];
const reverseArray = (inputArray) => {
  let reversedarrayresult = inputArray.slice().reverse();
  console.log(`the question Q3.7 : the reversed array values : [ ${reversedarrayresult} ]`);
}
reverseArray(inputArrQ3point7);

//////////////////////////////////////////////////
//Q3.8
let inpuObjectQ3point8 = { a: 1, b: 2 };
const convertObjectToArray= (inputObject) => {
  let arr = [];
  for (const key in inputObject){
    let tempArr = [key,inputObject[key]];
    arr.push(tempArr);
  }
  console.log(arr);
}
convertObjectToArray(inpuObjectQ3point8);
