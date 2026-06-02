// External js
console.log("Hi");

//Variables
var name="Prajwal";
console.log(typeof name);

var a = 19;
a = 20;
console.log(a); // it prints 20 because var supports reassinging
console.log(typeof a);

a = false;
console.log(typeof a);

var num=19067543289n;
console.log(num);
console.log(typeof num);

var value;
console.log(typeof value);

value = Symbol(91);
console.log(value);
console.log(typeof value);

// Array decalration
var arr =[1, false, "Prajwal"];
console.log(arr);
console.log(typeof arr); // initially it shows object as type
console.log(arr[0]); // accessing array elements by index

arr[0]=29;
console.log(arr[0]);
console.log(arr);

//object declaration -- represents key-value pair
var obj ={
    name:"prajwal",
    age:23,
    stream:"MCA",
};
console.log(obj);
console.log(typeof obj);

obj.name="suresh";
console.log(obj.name);

