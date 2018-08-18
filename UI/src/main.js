import './index.css';
import {
  loginBtn, creatAccountBtn, sidedrawer, backdrop,
} from './assets/js/globals';
import onLogin from './assets/js/login';
import onSignup from './assets/js/signup';
import { opennav, closenav } from './assets/js/sidenav';

// import './index.html';

if (loginBtn) {
  loginBtn.addEventListener('click', onLogin);
}

if (creatAccountBtn) {
  creatAccountBtn.addEventListener('click', onSignup);
}
if (sidedrawer) {
  sidedrawer.onclick = () => opennav();
}

if (backdrop) {
  backdrop.onclick = () => closenav();
}


console.log('Hello world');
