import { Api } from '../api/api';
import { validator } from './utils';

const api = new Api();

export const passwordInput = () => {
  const input = document.querySelector('#password');
  const capital = document.querySelector('#capital');
  const letter = document.querySelector('#letter');
  const number = document.querySelector('#number');
  const length = document.querySelector('#length');

  const lowerCaseLetters = /[a-z]/;
  const upperCaseLetters = /[A-Z]/;
  const numbers = /[0-9]/;
  const eyeicon = document.getElementById("eyeicon");
  const password = document.getElementById("password");

  eyeicon.onclick = function() {
    if (password.type == "password"){
      password.type = "text";
      eyeicon.src = "../assets/image/svg/eye.svg";
    }
    else{
      password.type = "password";
      eyeicon.src = "../assets/image/svg/eye_close.svg";
    }
  }

  document.getElementById('message').style.display = 'none';

  input.onfocus = function () {
    document.getElementById('message').style.display = 'block';
  };

  input.onblur = function () {
    document.getElementById('message').style.display = 'none';
  };
  
  const handleInput = (e) => {
    const value = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(value);
    const {
      include: [includeLowerCase, includeUpperCase, includeNumber],
      minLength
    } = validator(value).test({ include: [lowerCaseLetters, upperCaseLetters, numbers], minLength: 8 });
  
    if (minLength) {
      length.classList.remove('invalid');
      length.classList.add('valid');
    } else {
      length.classList.remove('valid');
      length.classList.add('invalid');
    }
  
    if (includeLowerCase) {
      letter.classList.remove('invalid');
      letter.classList.add('valid');
    } else {
      letter.classList.remove('valid');
      letter.classList.add('invalid');
    }
  
    if (includeUpperCase) {
      capital.classList.remove('invalid');
      capital.classList.add('valid');
    } else {
      capital.classList.remove('valid');
      capital.classList.add('invalid');
    }
  
    if (includeNumber) {
      number.classList.remove('invalid');
      number.classList.add('valid');
    } else {
      number.classList.remove('valid');
      number.classList.add('invalid');
    }
  };
  input.addEventListener('input', handleInput);
   
  registerButton.addEventListener('click', async (e) => {
    e.preventDefault ();
    const email = document.querySelector('#email').value,
          password = document.querySelector('#password').value;
          api.registration (email, password)
  });
};