function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Læs mere";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Læs mindre";
        moreText.style.display = "inline";
    }
}

// document.getElementById("go").addEventListener("click", function() {
//     var img = document.querySelectorAll("#container .image img")[0];
//
//     img.style.height = "200px";
//     img.style.width = "100px";
// });