let cel=getElementById("celsius");
let far= getElementById("fahrenheit");
function celtofar(){
    let output= (parseFloat(celsius.value)* 9/5)+32;
    fahrenheit.value= parseFloat(output.toFixed(2));
    console.log(output);
}
function fartocel(){
    let output=(parseFloat(fahrenheit.value)-32 )*5/9;
    celsius.value=parseFloat(output.toFixed(2));
    console.log(output);
}