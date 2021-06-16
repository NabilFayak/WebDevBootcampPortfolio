function fortune() {
  var children = document.forms["myForm"]["childrenAmount"].value;
  var partner = document.forms["myForm"]["partnerName"].value;
  var location = document.forms["myForm"]["idealLocation"].value;
  var job = document.forms["myForm"]["idealJob"].value;

  if (children == "" && partner == "" && location == "" && job == "") {
    alert("All fields must be filled out");
    return false;
  }

  if (children == "") {
    alert("Amount of children must be filled out");
    return false;
  }
  
  if (partner == "") {
    alert("Partner's name must be filled out");
    return false;
  }
  
  if (location == "") {
    alert("Ideal location must be filled out");
    return false;
  }
  
  if (job == "") {
    alert("Ideal job must be filled out");
    return false;
  }

  document.getElementById("fortuneteller").innerHTML = "You will have " + children + " children while married to " + partner + ". Your family will live happily in " + location + " and you will work as a " + job + ".";
}