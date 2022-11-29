////////////////////////////
//Bonus 1:
const convertFrom12To24 = (inputTime) => {
    //splitting
    let [hour12,minute12,amOrPm12] = inputTime.trim().split(/[\s,:]+/);
    let hour24
    switch(amOrPm12){
        case 'am':
             hour24 = hour12 % 12;
            break;
        case 'pm':
            hour24 = hour12 % 12 + 12;
            break;
    }
    
    console.log(`the time in 24 hour Format of ${inputTime} is ${hour24}:${minute12}`);
}

convertFrom12To24('1:00 pm');
convertFrom12To24('9:00 am');
convertFrom12To24('12:00 pm');
convertFrom12To24('12:00 am');
convertFrom12To24('6:00 pm');


/////////////////////////////////////////////////////////
//bouns 2
const add = (x) => (y) => x + y; 
console.log(add(1)(2));

///////////////////////////////////////////////////////////

///////////////////////////////////////
//bounu 3
const inputqBounus3array = ["rimon", "mostafa", "hisham", "John"];
function search(inputArr,searchKey) {
    let result = inputArr.find(n => searchKey == n) ;
    return result ? "existed" : "Not existed"; 
}
console.log(search(inputqBounus3array,"John"));
console.log(search(inputqBounus3array,"ggg"));