function ageCalculator() {
  var birthYear = document.forms["myForm"]["birthYear"].value;
  var futureYear = document.forms["myForm"]["futureYear"].value;
  var age = futureYear - birthYear;
  var possibleAge = age - 1;

  if (birthYear == "" && futureYear == "" ) {
    alert("All fields must be filled out");
    return false;
  }

  if (birthYear == "") {
    alert("Birth year must be filled out");
    return false;
  }
  
  if (futureYear == "") {
    alert("Future year must be filled out");
    return false;
  }

  document.getElementById("ageCalc").innerHTML = "I will be either " + possibleAge + " or " + age + " in " + futureYear + ".";
}