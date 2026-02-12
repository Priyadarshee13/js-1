console.log("the code is running");

const Mynums=[1,3,4,5]
const mytotal=Mynums.reduce(function( acc,curval){
    console.log(`acc:${acc}and cur:${curval}`);
    return acc + curval
},0)
     
console.log(mytotal);
