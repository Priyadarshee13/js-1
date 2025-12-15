const mysym=Symbol("key1")

const jsuser ={
    name:"pg",
    roll:123,
    "full name":"pgorai",
     [mysym]:"123",//symbol
     age:18,
     location :"jaipur"
    
    }
jsuser.name="gg"

Object.freeze(jsuser)//object values freezes cannot be changed
jsuser.name="kg"

console.log(jsuser);

// console.log(jsuser.name)
// console.log(jsuser["name"]);
// console.log(jsuser[mysym]);


jsuser.greeting=function(){
    console.log("hello user");
    
}

console.log(jsuser.greeting());

