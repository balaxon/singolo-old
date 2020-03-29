function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

window.onscroll = function() {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop < 600) {
      document.querySelectorAll('.toplink').forEach(el => el.classList.remove('home'));
      document.querySelector('.toplink').classList.add('home');
    }
    if (scrollTop > 600 && scrollTop < 1100) {
      document.querySelectorAll('.toplink').forEach(el => el.classList.remove('home'));
      document.querySelectorAll('.toplink')[1].classList.add('home');
    }
    if (scrollTop > 1100 && scrollTop < 1970) {
      document.querySelectorAll('.toplink').forEach(el => el.classList.remove('home'));
      document.querySelectorAll('.toplink')[2].classList.add('home');
    }
    if (scrollTop > 1970 && scrollTop < 2500) {
      document.querySelectorAll('.toplink').forEach(el => el.classList.remove('home'));
      document.querySelectorAll('.toplink')[3].classList.add('home');
    }
    if (scrollTop > 2500 && scrollTop < 3200) {
      document.querySelectorAll('.toplink').forEach(el => el.classList.remove('home'));
      document.querySelectorAll('.toplink')[4].classList.add('home');
    }
  }

function topm(ob) {
    document.querySelectorAll('.toplink').forEach(n => n.classList.remove('home'))
    ob.classList.add('home');
}

function screenOpacity(el) {
  if (el.nextElementSibling.style.filter == "brightness(100%)"){
    el.nextElementSibling.style.filter = "brightness(0%)";
  }else{el.nextElementSibling.style.filter = "brightness(100%)";}
}

function showmenu() {
  if(document.getElementById('topmenu').style.display === ""){
  }
  if(document.getElementById('topmenu').style.display === "none"){
    document.getElementById('topmenu').style.display = "block";
    // alert("asd");
    document.getElementById('he').style.marginLeft = "71px";
    document.getElementById('qwe').style.transform = "rotate(90deg)";
    // document.getElementById('qwe').style.paddingLeft = "20px";
    document.getElementById('qwe').style.transition = "0.5s";
  }else{
    document.getElementById('topmenu').style.display = "none";
    document.getElementById('he').style.marginLeft = "148px";
    document.getElementById('qwe').style.transform = "rotate(0deg)";
    // document.getElementById('qwe').style.paddingLeft = "20px";
  }

}

function nextSlideLeft() {
  if (document.getElementById('slide_2').style.marginLeft == "-1020px"){
    // document.getElementById('slide_1').addEventListener("transitionstart",obnlLeft);
  }
  if (document.getElementById('slide_1').style.marginLeft == "0px") {
    document.getElementById('slide_2').style.marginLeft = "0px";
    document.getElementById('slide_2').style.transition = "margin 1s ease-out 0.5s";
    document.getElementById('slide_1').style.marginLeft = "-1020px";
    document.getElementById('slide_1').style.transition = "margin 1s ease-out 0.5s";
    document.getElementById('slide_1').addEventListener("transitionend",obnlLeft);
  }else{
    document.getElementById('slide_1').style.marginLeft = "0px";
    document.getElementById('slide_1').style.transition = "margin 1s ease-out 0.5s";
    document.getElementById('slide_2').style.marginLeft = "-1020px";
    document.getElementById('slide_2').style.transition = "margin 1s ease-out 0.5s";
    document.getElementById('slide_1').addEventListener("transitionend",obnlLeft);
  }
}

function obnlLeft() {
  if(document.getElementById('slide_2').style.marginLeft == "0px"){
    document.getElementById('slide_1').style.marginLeft = "1020px";
    document.getElementById('slide_1').style.transition = "";
  }else{
    document.getElementById('slide_2').style.marginLeft = "1020px";
    document.getElementById('slide_2').style.transition = "";
  }
}

function nextSlideRight() {
  if (document.getElementById('slide_1').style.marginLeft == "0px") {
    document.getElementById('slide_2').style.marginLeft = "0px";
    document.getElementById('slide_2').style.transition = "margin 1s ease-out 0.5s";
    document.getElementById('slide_1').style.marginLeft = "1020px";
    document.getElementById('slide_1').style.transition = "margin 1s ease-out 0.5s";
    document.getElementById('slide_1').addEventListener("transitionend",obnlRight);
  }else{
    document.getElementById('slide_1').style.marginLeft = "0px";
    document.getElementById('slide_1').style.transition = "margin 1s ease-out 0.5s";
    document.getElementById('slide_2').style.marginLeft = "1020px";
    document.getElementById('slide_2').style.transition = "margin 1s ease-out 0.5s";
    document.getElementById('slide_1').addEventListener("transitionend",obnlRight);
  }
}

function obnlRight() {
  if(document.getElementById('slide_2').style.marginLeft == "0px"){
    document.getElementById('slide_1').style.marginLeft = "-1020px";
    document.getElementById('slide_1').style.transition = "";
  }else{
    document.getElementById('slide_2').style.marginLeft = "-1020px";
    document.getElementById('slide_2').style.transition = "";
  }
}

function portfoli(qw) {
  document.querySelectorAll('.portfolio_link').forEach(n => n.classList.remove('link_all'))
  qw.classList.add('link_all');
}

function portfolio_border(we) {
  document.querySelectorAll('.portfolio_img').forEach(n => n.classList.remove('portfolio_border_red'))
  we.classList.add('portfolio_border_red');
}

function all_img() {
  document.getElementById('portfolio_div_img').querySelectorAll('img').forEach(el => el.style.display="block");
}

function webdesign() {
  document.getElementById('portfolio_div_img').querySelectorAll('img').forEach(el => el.style.display="none");
  document.getElementById('portfolio_div_img').querySelectorAll('img')[getRandomInt(12)].style.display="block";
  document.getElementById('portfolio_div_img').querySelectorAll('img')[getRandomInt(12)].style.display="block";
  document.getElementById('portfolio_div_img').querySelectorAll('img')[getRandomInt(12)].style.display="block";
  document.getElementById('portfolio_div_img').querySelectorAll('img')[getRandomInt(12)].style.display="block";
}

function graphicdesign() {
  document.getElementById('portfolio_div_img').querySelectorAll('img').forEach(el => el.style.display="none");
  document.getElementById('portfolio_div_img').querySelectorAll('img')[getRandomInt(12)].style.display="block";
  document.getElementById('portfolio_div_img').querySelectorAll('img')[getRandomInt(12)].style.display="block";
  document.getElementById('portfolio_div_img').querySelectorAll('img')[getRandomInt(12)].style.display="block";
  document.getElementById('portfolio_div_img').querySelectorAll('img')[getRandomInt(12)].style.display="block";
}

function artwork() {
  document.getElementById('portfolio_div_img').querySelectorAll('img').forEach(el => el.style.display="none");
  document.getElementById('portfolio_div_img').querySelectorAll('img')[getRandomInt(12)].style.display="block";
  document.getElementById('portfolio_div_img').querySelectorAll('img')[getRandomInt(12)].style.display="block";
  document.getElementById('portfolio_div_img').querySelectorAll('img')[getRandomInt(12)].style.display="block";
  document.getElementById('portfolio_div_img').querySelectorAll('img')[getRandomInt(12)].style.display="block";
}

function send_form() {
  document.getElementById('model_window').style.display = "block";
  document.getElementById('opas').classList.add('layout');
  let serlectorP=document.getElementById('model_window').querySelectorAll('p');
  document.getElementById('model_window').style.display="block";
  serlectorP[0].innerHTML="Письмо отправлено";
  if (document.getElementById('text_subject').value!=""){
    serlectorP[1].innerHTML="Тема:"+document.getElementById('text_subject').value;
  }else{
    serlectorP[1].innerHTML="Без темы";
  }
  if (document.getElementById('text_textarea').value!=""){
    serlectorP[2].innerHTML="Описание:"+document.getElementById('text_textarea').value;
  }else{
    serlectorP[2].innerHTML="Без описания";
  }
}

function mod_sub() {
  document.getElementById('model_window').style.display = "none";
  document.getElementById('opas').classList.remove('layout');
  document.getElementById('Get_a_Quote_form').reset();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
