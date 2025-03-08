const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    return res.send(" hello from home page ");
});
app.get("/about",(req,res)=>{
    return res.send(" hello from home page ");
});
app.listen( 8000,()=>console.log("server started!"));



























































// const http =require("http");
// const myserver=http.createServer((req,res ) =>{ 
//     console.log(" New req rec.");
// res.end("hello from sserver");

// });
// myServer.listen(8000,()=>console.log("servers started"));
