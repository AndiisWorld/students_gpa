var accordion = document.querySelector("#ixtisas li:nth-child(2)");
var arrow=document.querySelector("#ixtisas li:nth-child(2) img")


  accordion.addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
        // arrow.setAttribute('src', './images/arrow2.png')
        document.querySelector('aside').style.marginTop = "-120px"
    } else {
      panel.style.display = "block";
    //   arrow.setAttribute('src', './images/arrow.png');
      document.querySelector('aside').style.marginTop = "-150px"
    }
  });

  var ixtisas = document.querySelector("#ixtisas .panel li:nth-child(2)");
  var arrow=document.querySelector("#ixtisas li:nth-child(2) img")
  
  
    ixtisas.addEventListener("click", function() {
      document.querySelector('main').innerHTML =
        "<ul><li><a href='group.html'>681.18 (az)</a>  </li><li> 683.18 (az) </li><li> 685.18 (az) </li><li> 684.18 (ru) </li><li> 680.18 (ru) </li><li> 682.18E (ing) </li></ul>";
        document.querySelector('main ul').setAttribute('class', 'groups');
    });

    console.log(document.querySelector('main'));