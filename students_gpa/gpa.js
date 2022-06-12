let btn2 = document.querySelector('#ixtisas li:nth-child(2)');
console.log(btn2);

btn2.addEventListener("click",() => {
    document.querySelector('#students').style.display = 'block';
    document.querySelector(".komp-muh").style.display = 'none';
    document.querySelector('#subjects').style.display = 'none';
    document.querySelector("#gpa").style.display = 'none';
    document.querySelector('main').style.marginLeft='550px';
    document.querySelector('main').style.marginTop='-100px';
})



let btn3 = document.querySelector('#ixtisas li:nth-child(3)');
console.log(btn3);

btn3.addEventListener("click",() => {
    document.querySelector('#subjects').style.display = 'block';
    document.querySelector("#students").style.display = 'none';
    document.querySelector(".komp-muh").style.display = 'none';
    document.querySelector("#gpa").style.display = 'none';
    document.querySelector('main').style.marginLeft='550px';
    document.querySelector('main').style.marginTop='-100px';
})



let btn5 = document.querySelector('#ixtisas li:nth-child(5)');
console.log(btn5);

btn5.addEventListener("click",() => {
    document.querySelector('#subjects').style.display = 'none';
    document.querySelector("#students").style.display = 'none';
    document.querySelector(".komp-muh").style.display = 'none';
    document.querySelector("#gpa").style.display = 'block';
    document.querySelector('main').style.marginLeft='0';
    document.querySelector('main').style.marginTop='0px';
    document.querySelector('#first').style.marginLeft='600px';
})