
let fs=require("fs");

fs.mkdir("./documents",(err)=>{
    if (err){
        console.log(err);
    }else{
        console.log("Folder created successfully")
    }

});
fs.writeFile('./documents/hello.txt',"Hello Hello Hello",(err)=>{
  if (err) {
    console.log(err);
  } else {
    console.log ("File created successesfully");
  
  }
});