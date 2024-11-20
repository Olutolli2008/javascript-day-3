// Functions

function showName(){
    document.write("Senad");
    document.write("Orges");
}



showName();


function showNumber(){
    // variabel lokale 
    var a=5;
    alert(a);
}

showNumber();

// console.log(a); //error

         //parametrat -variabla brenda funksionin
function sum(numri1,nurmi2){
    return ( numri1+numri2);
}

console.log(sum(4,7))//11 

function mbetja(numri1,numri2){
    return numri1 %numri2;
}
 
console.log(mbetja(65,12));

//me i ktye farenheit ne celsius

//5/9  *(f-32)


function toCelcius(f){
    return  (5/9) *(f-32);
}

console.log("Vlerat e 54f ne celsius eshte: " +toCelsius(54));


//aroow functions

var arrowFunction =() =>{
    console.log("Fatmir");
}

arrowFunction();


function toMinutes(minutes){
    return minutes * 60;

}

console.log("10 minuta i kan " + toMinutes(10) + "sekonda");