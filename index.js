const fs=require('fs');


fs.readFile('./file1.txt','utf-8',(err,data)=>{
if (err){
    console.log(err);
}
console.log(data)
fs.copyFile('./file1.txt','file2.text',(error)=>{
    if(error){
        console.log(error)
    }else {
        console.log('copying to file2.text')
    }
    fs.readFile('./file2.text','utf-8',(finalErr,finalData)=>{
        if (finalErr){
            console.log(finalErr);
        }else {

            console.log(finalData)
        }
})
})
})

// console.log(`hello`) 