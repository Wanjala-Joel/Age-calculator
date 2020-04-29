////////////////////////////////////////////////////////////////////////////////////
////// Challenge 1: Functions

init();

document.querySelector('.btn-calculate').addEventListener('click', calculateAge);

function calculateAge(){
 
    var currentYear = document.querySelector('.current-year').value; 
    var yearOfBirth = document.querySelector('.birth-year').value;
    if(currentYear.length === 4 && yearOfBirth.length === 4 && currentYear > yearOfBirth){
        var age = currentYear - yearOfBirth;
        if(age > 0){
            document.querySelector('.user-interface').style.display = 'block';
            document.querySelector('.present-age').textContent = age;
        }
    }else{
        document.querySelector('.user-interface').style.display = 'block';
        document.querySelector('.user-interface').textContent = 'An error occured, reload this page!';
    }
}

 function init(){
    document.querySelector('.user-interface').style.display = 'none';
 }
/*
 init();

//////////////////////////////////////////////////////////////////////////////////////////
///// Challenge 2: Functions and objects

 document.querySelector('.btn-calculate').addEventListener('click', calculateAge);

 function calculateAge(){
     var calculator = {
    current: [],
    birth: [],
 };

 calculator.current.push(document.querySelector('.current-year').value);
 calculator.birth.push(document.querySelector('.birth-year').value);

 var age = calculator.current - calculator.birth;
 //console.log(calculator.current);
 if(age > 0){
    document.querySelector('.user-interface').style.display = 'block';
    document.querySelector('.present-age').textContent = age;
 }
}
*/

//var num = Date();
//document.querySelector('.show-date').textContent = num;
