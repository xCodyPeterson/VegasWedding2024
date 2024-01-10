function showInput() {
    console.log('showInput called...')
    var userInput = document.getElementById("userInput").value;
    var display = document.getElementById("display");
    display.innerHTML = userInput;
  }