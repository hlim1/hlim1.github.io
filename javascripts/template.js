function navFunction() {
    var x = document.getElementById("my-nav");
    if (x.className === "main-nav") {
        x.className += " responsive";
    }
    else {
        x.className = "main-nav"; 
    }
}
