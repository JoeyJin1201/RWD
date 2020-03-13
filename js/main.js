const navList = document.querySelector('.navList');
const hamburger = document.querySelector('.hamburger');

const signUp = document.querySelector('.signUp');
const logIn = document.querySelector('.logIn');

const signUpBtn = document.querySelector('#goSignUp');
const logInBtn = document.querySelector('#goLogIn');

hamburger.addEventListener('click',toggleList,false);

signUpBtn.addEventListener('click',changeForm,false);
logInBtn.addEventListener('click',changeForm,false);

function toggleList() {

  let navListCurrent = navList.className;
  let navListClass = navList.classList;
  let hamburgerBtn = document.getElementById('open');
  let closeBtn = document.getElementById('close');

  if (navListCurrent === "navList hideList") {
    navListClass.remove('hideList');
    navListClass.add('showList');
    hamburgerBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
  } else if (navListCurrent === "navList showList") {
    navListClass.remove('showList');
    navListClass.add('hideList');
    hamburgerBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
  }
  
}

function changeForm(e) {
  
  if (e.target.id === "goSignUp") {
    logIn.style.display = "none";
    signUp.style.display = "block";
  } else if (e.target.id === "goLogIn") {
    signUp.style.display = "none";
    logIn.style.display = "block";
  }
  
}