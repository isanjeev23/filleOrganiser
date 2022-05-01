#!/usr/bin/env node
const inputArr = process.argv.slice(2);

// requiring the modules that we created for commands 
const helpObj = require('./commands/help');
const treeObj = require('./commands/tree');
const organizeObj = require('./commands/organize');


let  command  = inputArr[0] ;

let dirPath = inputArr[1] ;

// category types object 



switch(command){
    case 'tree' :
        treeObj.treeKey(dirPath);
        break;
    
    case 'organise' :
        organizeObj.organiseKey(dirPath);
        break;
    
    case 'help' :
          helpObj.helpkey();
          break;
    
    default :
      console.log('please enter correct command and DirectoryPath ');

}







