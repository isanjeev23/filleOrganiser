const fs = require('fs');
const path = require('path');

function treeFunction(dirPath){
    if(dirPath == undefined){
        dirPath = process.cwd();
    }
    else if(!fs.existsSync(dirPath)){
        console.log("This directory Dosn't Exist")
        return ;
    }
    
        treeHelper(dirPath , "");   
}


function treeHelper(dirPath, indent) {
    // is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();

    if(isFile == true){
        let fileName = path.basename(dirPath);

        console.log(indent +"├──" + fileName);
        return ;
    }
    else{
        let dirName = path.basename(dirPath);

        console.log(indent + "└──" + dirName);

        let dirChildArr = fs.readdirSync(dirPath);

        for(let i= 0 ; i< dirChildArr.length ; i++){
            
            let childPath  = path.join(dirPath , dirChildArr[i]);

            treeHelper(childPath , indent + "\t");
        } 
        return ;
    }
}

module.exports ={
    treeKey : treeFunction
}