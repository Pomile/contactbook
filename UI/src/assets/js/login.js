import { email, password, loginBtn } from './globals';

const onLogin = (event) => {
  event.preventDefault();
  const storedemail = localStorage.getItem('email');
  const storedpassword = localStorage.getItem('password');
  console.log('auth', email.value === storedemail && password.value === storedpassword);
  if (email.value === storedemail && password.value === storedpassword) {
    window.location.href = 'http://localhost:8080/';
    return 'login success';
  }
};

export default onLogin;
