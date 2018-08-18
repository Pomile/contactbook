import {
  firstname, lastname, email, password, confirmPassword,
} from './globals';

const onSignup = (event) => {
  event.preventDefault();
  localStorage.setItem('firstname', firstname.value.trim());
  localStorage.setItem('lastname', lastname.value.trim());
  localStorage.setItem('email', email.value.trim());
  if (password.value.trim() === confirmPassword.value.trim()) {
    localStorage.setItem('password', password.value);
  } else {
    document.getElementById('password').style.borderColor = 'red';
    document.getElementById('confirmpassword').style.borderColor = 'red';
  }
};


export default onSignup;
