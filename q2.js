var b =1;
function outer (){
    var b = 2;
    function inner(){
        b++;
        var b =3;
        console.log(b);
    }
    inner();
}
outer();


for(let i= 0; i< 5; i++){
    setTimeout(() => {
        console.log(i);
    }, i*1000);
}


let arr = ['foo', 'bar'];
arr.length = 0;
arr.push('baz');
console.log(arr);


function func(){
    for(let key in arguments){
        console.log(arguments[key]);
    }
}
func(1,"Hello", true);



let car = {
    carName: "BMW",
    carprice: 10000
}
console.log(car instanceof Object);
console.log(Object.entries(car));
