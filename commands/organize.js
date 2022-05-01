const fs = require('fs');
const path = require('path');
const typeObj = require('./type');



function organiseFunction(dirPath){
    let pathExist = fs.existsSync(dirPath);
    
    let destPath ;

    if(dirPath == undefined ){
        dirPath = process.cwd();
    }
    else if(!pathExist){
        console.log("Path Does not Exist");
        return ;
    }
    
        destPath = path.join(dirPath , 'organisedFile');
        if(!fs.existsSync(destPath)){
            fs.mkdirSync(destPath);
        }


   organiseHelper(dirPath , destPath);
}

function organiseHelper(src , destPath){
    
    let childArr = fs.readdirSync(src);

    for(let i=0 ; i<childArr.length ; i++){
        let childAddressPath = path.join(src , childArr[i]);
        let isFile = fs.lstatSync(childAddressPath).isFile();

        if(isFile){
            let category = getCategory(childArr[i]);
           
            let catPath = path.join(destPath , category);
            
            if(!fs.existsSync(catPath)){
                fs.mkdirSync(catPath);
            }

            sendFiles(childAddressPath , catPath); 
        }
    }
}

// function to identify files Category 

function getCategory(fileName){
    let extension = path.extname(fileName);
    let types = typeObj.key ; // cattegory obj 
    
    extension = extension.slice(1);
    //console.log(extension);
    for(let type in types){

        let currTypeArr = types[type];

        for(let i=0 ; i<currTypeArr.length ; i++){
            if(extension == currTypeArr[i]){
                return type ;
            }

        }

        
    }
    return 'Others' ;
}

function sendFiles(srcFilePath, subCatAddress){

    let fileName = path.basename(srcFilePath);
    
    let pastePath = path.join(subCatAddress , fileName) ;
    
    if(!fs.existsSync(pastePath))
    fs.copyFileSync(srcFilePath , pastePath);

    fs.unlinkSync(srcFilePath);
}

// to export the module 

module.exports={
     organiseKey : organiseFunction
}