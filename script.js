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
    if (scrollTop > 1970 && scrollTop < 2700) {
      document.querySelectorAll('.toplink').forEach(el => el.classList.remove('home'));
      document.querySelectorAll('.toplink')[3].classList.add('home');
    }
    if (scrollTop > 2700 && scrollTop < 3200) {
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

function nextSlide() {
  if (document.getElementById('slide_1').style.display == "block") {
    document.getElementById('slide_1').style.display = "none";
    document.getElementById('slide_2').style.display = "block";
  }else{
    document.getElementById('slide_2').style.display = "none";
    document.getElementById('slide_1').style.display = "block";
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
  // alert("asd");
  document.getElementById('portfolio_div_img').querySelectorAll('img').forEach(el => el.style.display="block");
}

function webdesign() {
  document.getElementById('portfolio_div_img').querySelectorAll('img').forEach(el => el.style.display="none");
  // for (let i = 0; i < getRandomInt(13); i++) {
  // alert(getRandomInt(1, 12));
  // document.getElementById('portfolio_div_img').querySelectorAll('img')[getRandomInt(13)].style.display="block";
  // }
  document.getElementById('portfolio_div_img').querySelectorAll('img')[0].style.display="block";
  document.getElementById('portfolio_div_img').querySelectorAll('img')[6].style.display="block";
  document.getElementById('portfolio_div_img').querySelectorAll('img')[8].style.display="block";
  document.getElementById('portfolio_div_img').querySelectorAll('img')[10].style.display="block";
}

function graphicdesign() {
  document.getElementById('portfolio_div_img').querySelectorAll('img').forEach(el => el.style.display="none");
  document.getElementById('portfolio_div_img').querySelectorAll('img')[3].style.display="block";
  document.getElementById('portfolio_div_img').querySelectorAll('img')[7].style.display="block";
  document.getElementById('portfolio_div_img').querySelectorAll('img')[9].style.display="block";
  document.getElementById('portfolio_div_img').querySelectorAll('img')[11].style.display="block";
}

function artwork() {
  document.getElementById('portfolio_div_img').querySelectorAll('img').forEach(el => el.style.display="none");
  document.getElementById('portfolio_div_img').querySelectorAll('img')[1].style.display="block";
  document.getElementById('portfolio_div_img').querySelectorAll('img')[2].style.display="block";
  document.getElementById('portfolio_div_img').querySelectorAll('img')[4].style.display="block";
  document.getElementById('portfolio_div_img').querySelectorAll('img')[5].style.display="block";
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
}
