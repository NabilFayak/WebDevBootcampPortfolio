function ninja() {
    var actions = ["punched" , "kicked" , "pushed"]
    var randomAction = actions[Math.floor(Math.random() * 5)];
    var randomNumber = Math.floor(Math.random() * 1000)
    document.getElementById("ninjaMoves").innerHTML = "The ninja " + randomAction + " you " + randomNumber + " times.";
}