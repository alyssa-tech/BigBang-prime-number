const fs = require('fs');
const output = array();


//create array
function array(){
    const result =[];

    for (let i=1; i<101; i++){
        if (i%3==0 && i%5==0){
            result.push("BIG BANG");}
        else if (i%3==0){
            result.push("BIG");}
        else if (i%5==0){
            result.push("BANG")}
        else{
            result.push(i);}
    }
    return result;
}

//print array in a file
fs.writeFile('output.json', JSON.stringify(output), (err)=> {
    if (err) throw err;
    console.log('Output saved.')
})
