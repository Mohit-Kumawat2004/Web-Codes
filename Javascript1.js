const http = require("http");
const server = http.createServer((req,res) => 
{
    
    // const url = req.url;
    // if(url === "/api/v1/bca")
    // {
    //     res.end("BCA");
    // }
    // else if(url.includes("btech"))
    // {
    //     res.end("BTECH");
    // }
    // else{
    //     res.end("MCA")
    // }
});
server.listen(3000, "localhost" , () => 
{
   console.log("server startd");
});

/*console.log("hello js");
let a = 10;
console.log(a);

const b = 20;
console.log(b);

function add(a,b)
{
    return a+b;
}
console.log(add(100,200));

for(let i=0;i<a;i++)
{
   console.log("hello ");
}*/
// var arr = [1,2,0,45,67]
// for(var i=0;i<5;i++)
// {
//     console.log(arr[i]);
// }
// console.log("reverse array : ");

// for(var i=arr.length-1;i>=0;i--)
// {
//     console.log(arr[i]);
// }
// var max = arr[0];
// var min = arr[0];
// for(var i=0;i<arr.length;i++)
// {
//     if(arr[i]<min)
//     {
//         min = arr[i];
//     }
//     if(arr[i]>max)
//     {
//         max = arr[i];
//     }
// }
// console.log("maximum " + max);
// console.log("manimum " + min);