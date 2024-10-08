//File System in Node js 

//  fs is file system module 
// node js file system modules allows you to work with the file system on your device 
// we can say that we can play with files using this module 
// Read, create , update , delete, reanme file.


    let fs = require('fs');
    let http = require('http');


 fs.mkdirSync("Rishi");
// creating directory or folder

fs.writeFileSync("Rishi/office.txt","Welcome to pinnacle Office");




 // Create
   fs.writeFile('school.txt','Welcome to little flower school', function (err){
    // writeFile create file and put data inside the file
    if(err) throw err;
        
        console.log('File create successfully');
     });  
   
    
// Read
    fs.readFile('school.txt',function(err){
        // read file contain  data 
    if(err) throw err;
        
    console.log('File read successfully');
 });


//  Here we read html file with help of fs and http  module
http.createServer(function (req, res){
    fs.readFile('sample.html', function (err){
        if(err) throw err;
        console.log("File is read");
    });
}).listen(3300);
/* rishi-sharma@NAGHOLT211:~/Documents/Nodepractice/practiceNode$ node indexx.js
File is read 
HELLO FRIENDS
Welcome to File read  example
**Output of above code is File is read **

*/


    
// Updaate 
// here we used writeFile command for update file 

fs.writeFile('school.txt','There is no school', function(){
    console.log('File updated successfully');
});









//Delete File
// Delete a  file use the fs.unlink() method


fs.writeFile('Cars.txt','There is no school', function(){
    console.log('Create file for delete successfully');
});


fs.unlink('Cars.txt',function(){
    console.log('Delete file successfully');
});








//Rename
// Rename a file, use the fs.rename() method
fs.writeFile('animals.txt','There is no school', function(){
    console.log('Create file for delete successfully');
});

fs.rename('animals.txt','There is no school', function(){
    console.log('Create file for delete successfully');
});

