var acc = document.querySelector("#faculties li:nth-child(1)");
var arr=document.querySelector("#faculties li:nth-child(1) img")
var i;


  acc.addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
        arr.setAttribute('src', './images/arrow2.png')
        document.querySelector('aside').style.marginTop = "-120px"
    } else {
      panel.style.display = "block";
      arr.setAttribute('src', './images/arrow.png');
      document.querySelector('aside').style.marginTop = "-150px"
      // document.querySelector('main').style.height='300px';
    }
  });

console.log(accordion);