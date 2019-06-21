// [NODE] [main] [add/help/delete/etc {condition}] 
//   0       1            2            
//===========================================================================================
 // help section that lists all the commands and a short description for each of them
 const fs = require("fs");

 let helpLs = ["if u need help type [help] " , "for add file type [add]" , "for delete file type [delete]", "for update your file type [update]" , "for read file type [show]"];
// this is the random list 
 let to_do_list = ["hey do this list" , "one butter" ,"tow bunche bread" ,"wash the car" ,"remove second item from this list"];
 const condition = process.argv[2]; //this line is the thered argument in commend line
 const items = process.argv[3];     ////this line is the 4th argument in commend line
 const endOfLine = require('os').EOL
 const txtFilename = 'to_do.txt';
 
 if ( condition === "help" || condition == undefined || condition == String) {
    
  console.log(helpLs)

}
//=============================================================================================

else if(condition === "list"){
    fs.writeFile(txtFilename ,to_do_list.join('\r\n'), function (err) {
      if (err) throw err;
      
    });
    console.log("============yor list is down ========");
    console.log(to_do_list)
}

//======================================================================================
else if(condition ==="add"){
  
  fs.appendFile(txtFilename, items+endOfLine , function (err) {
    if (err) throw err;
    console.log('yor item add');
  });
}
  
//=====================================================================================

else if(condition == "remove"){

    // console.log(newItem)
    function read(file, callback) {
      fs.readFile(file, 'utf8', function(err, data) {
          if (err) {
              console.log(err);
          }
          callback(data);
      });
  }

    let output = read('to_do.txt', function(data) {
      var newArry = data.split("\r\n");
      console.log(newArry)
      let newItem = parseInt(items);
      if(newItem > 0 && newItem <=newArry.length){// if(newItem === Number && newItem != NaN){
        let finalNom = newItem-1;
        newArry.splice(finalNom, 1);
        
        fs.writeFile(txtFilename ,newArry.join('\r\n'), function (err) {
          if (err) throw err;
          
        });
        console.log("write whitch item you want remove")
      }else{
        
        console.log("this item is not exist")
      }
  });

  
  

  
  
  
  
}else if(condition === "reset"){
  fs.writeFile('to_do.txt',"", function (err) {
    if (err) throw err;
    console.log('file reset');
  });
}else if(condition === "update"){
  fs.appendFile(txtFilename, items+endOfLine , function (err) {
    if (err) throw err;
    console.log('your file update');
  })
}
