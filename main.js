// in class

// console.log("funaction sum");

// function sum(num1 , num2){
//     let t=num1 + num2;
//     return t;
// }

// console.log(sum(2,3));

// fun2
// const mun=(num3 , num4)=>{
//     console.log(num3-num4);

// }
// fun3
// const mult=(num5 , num6)=>{
//     console.log(num5 * num6);

// }
// fun4
// const devid=(num7 , num8)=>{
//     console.log(num7 / num8);

// }
// console.log("funaction Minuse");
// mun(5 , 3)
// console.log("funaction mult");
// mult(5 ,3)
// console.log("funaction devid");
// devid(12,2)


// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// const evenNumbers =arr.filter(function (i) {
// return  i %2==0;

// });
// console.log("Even Number");
// console.log(evenNumbers);

// let arr1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// const oddNumbers =arr.filter(function (i) {
// return  i % 2 == 1;

// });
// console.log("odd Number");
// console.log(oddNumbers);

// console.log("Find");
// const FirstEven= arr.find(function(x){
//     return x % 2==0

// })
// console.log(FirstEven);

// arr.forEach(function(x, index){
//     return arr[index]=x*2

// })
// console.log(arr);







// lab

console.log("-------------Lab-------------");

 let arrObject = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];


console.log("-----Find-----");

const F_name= arrObject.find(function(x){
    return x.eye_color === "blue";
});
console.log(F_name.name);

const first_gende= arrObject.find(function(x){
    return x.mass > 50;
});
console.log(first_gende.gender);


// FILTER
console.log("------FILTER------");

const F_height =arrObject.filter(function(x){
    return x.height < 200;
});
console.log(F_height);

const male_g =arrObject.filter(function(x){
    return x.gender === "male";
});
console.log(male_g);


// map
console.log("-------Map-------");

const name_Map= arrObject.map(function(value,i){
    return value.name
});
console.log(name_Map);


const hight_Map= arrObject.map(function(value,i){ 
    return value.height;

});
console.log(hight_Map);

// sort

console.log("------sort-------");

const sort_mass = arrObject.sort(function(a ,b){
    return a.mass - b.mass;

});
console.log(sort_mass );

const sort_hight = arrObject.sort(function(a ,b){
    return b.height - a.height 

});
console.log(sort_hight );



console.log("-----EVERY------");
const all_Names = arrObject.every(function(x){
    return x.mass > 40
});
console.log(all_Names);

const all_height= arrObject.every(function(x){
    return x.height < 200;
});
console.log(all_height);

console.log("-----SOME------");

const eye= arrObject.some(function(x){
    return x.eye_color === "blue";
});
console.log(eye);

const taller= arrObject.some(function(x){
    return x.height > 210;
});
console.log(taller);




















