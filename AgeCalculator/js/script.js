function ageCalculator(){ 	
var dob = document.getElementById("3").value+document.getElementById("1").value+document.getElementById("2").value;
var year = Number(dob.substr(0, 4));
var month = Number(dob.substr(4, 2)) - 1;
var day = Number(dob.substr(6, 2));
var today = new Date();
var age = today.getFullYear() - year;

if(month > 12 || day >31 ){
	return document.getElementById("result").innerHTML =    
             "Error in input";
}else{
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
if(age > 18){
		return document.getElementById("result").innerHTML = "+ year + " "+ month + " "+ day ";   
             "Elligible for voting: Age is: "+ age + " years. ";
				
	}else{
		return document.getElementById("result").innerHTML =    
             "Not Elliigible for voting : Age is: " + age + " years. "; 		
	}
}
}
