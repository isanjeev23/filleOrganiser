
function helpFun(){
    console.log(`
     List of all commands if bash in Script Dir:
           node main.js tree "dirPath" 
           node main.js organise "dirPath"
           node main.js help  
    
         List of command global :
                 fsorganise "command" "dirPath"
                     fsorganise tree
                     fsorganise help
                     fsorganise organise
                     
    `);
}



module.exports ={
    helpkey : helpFun
}