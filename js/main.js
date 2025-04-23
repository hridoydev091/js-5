// // ---------------------------function\
//  function name() {
//     let user = {
//         firstName:"Rajip",
//         lastName:"Rakib",
//     }
//     console.log(user.firstName);
    
//  }
//  name();

//  //abar ei niom oo kora jai function 
//  function Hridoy(first_Name1,last_Name1) {
//     let user1 ={
//     firstN_Name1:first_Name1,
//     last_Name1:last_Name1,
//     };
//     console.log(user1.last_Name);
//  }
//  Hridoy("Arif","Sifat");

// // abar ei niom ye kora jai
// function Hridoy2(first_Name2,last_Name2) {
//     let user2 ={
//     firstN_Name2:first_Name2,
//     last_Name2:last_Name2,
//     };
//     console.log(user2.firstN_Name2 + '' + user2.last_Name2);
//  }
//  Hridoy2("Alif","Orjun");

//  // abar ei niom ye kora jai
//  function Hridoy3(first_Name3,last_Name3) {
//     let user3 ={
//     first_Name3,
//     last_Name3,
//     };
//     console.log(user3.firstN_Name3 + '' + user3.last_Name3);
//  }
//  Hridoy3("Imran","jahid");


 
//  // abar ei niom ye kora jai
//  function Hridoy3(first_Name4,last_Name4) {
//     let user4 ={
//     first_Name4,
//     last_Name4,
//     fevsub:'Js',
//     };
//     console.log(user4.first_Name4 + '' + user4.last_Name4);
//     console.log(user4.fevsub);
    
//  }
//  Hridoy3("Khorshed","Alom");


//  // function return ki vabe kaj kore ta dekbo

//  function Rof(name1,name2) {
//     let usert = {
//         name1,
//         name2,
//     };
//     return usert;// return name ye valu dile function er bahire console.log kora jai
//  }
//  let newUser = Rof("Rummon","Rakip");
//  console.log(newUser.name1);


 
//  function Rofi(name3,name4) {
//     let userk = {
//         name3,
//         name4,
//     };
//     return userk;// return name ye valu dile function er bahire console.log kora jai
//  }
//  let newUsert = Rofi("Rummon","Hasan");
//  console.log(newUser.name4);

//  // abr ei vabe o kora jai
//  let newUsert2 = Rofi ("appu","vaiya");
//  console.log(newUsert2.name3);
 
// -------------------object methods 
let firstObj = {
   myName:"Rajip",
};

let secondObj ={
   myName:"Rajip",
};
console.log(firstObj == secondObj);// eita false asbe 



let firstObj1 = {
   myName:"Rajip",
};
let secondObj1 = {
   myName:"Rajip",
};
let a = 5;
let b = 5;
console.log(a == b);// r eita true asbe

// abar ei niom ye kora jai
let firstObj2 = {
   myName:"Rajip",
};

let secondObj2 ={
   myName:"Rajip",
};

let thirdobj = secondObj2;
console.log(thirdobj == secondObj2);// eita true asbe


// abar ei niom ye kora jai
let firstObj3 = {
   myName:"Rajip",
};

let secondObj3 ={
   myName:"Rajip",
};

let thirdobj1 = secondObj3;
console.log(firstObj3["myName"]==secondObj3["myName"]);// ei khane true asbe

// ----------------abr new obj
const usert = {
   myName1: "Rajdwib",
};

usert.myName1 = "Rajip";
console.log(usert.myName1);

// abr 
const usertr ={
   myName2 :"Rakib",
};

usertr["myName2"] = "Ontor";
console.log(usertr);
