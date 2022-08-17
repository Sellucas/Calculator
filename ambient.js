//Display value on screen
function liveScreen(value) {
    let res = document.getElementById("result");
    if (!res.value) {
      res.value = "";
    }
    res.value += value;
}

//Clear Screen on C button
function clearScreen() {
    document.getElementById("result").value = "";
}