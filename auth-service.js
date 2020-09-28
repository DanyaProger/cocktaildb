class AuthService {
  constructor() {
    this.user = null;
    this.users = {
        'admin': '123',
        'danila': '1234'
    };
  }

  isAuthenticated () {
    return this.user != null
  }

  setUser (user) {
    this.user = user;
  }

  logIn(login, password) {
    if (login in this.users && this.users[login] == password)
    {
        this.setUser(login);
        useAuthorizedLayout();
        onNavigate('/');
    }
    else
    {
        alert('Login or password is wrong.')
    }
  }

  signUp(login, password) {
    if (!(login in this.users))
    {
        this.users[login] = password;
        this.logIn(login, password);
    }
    else
    {
        alert('Login or password is wrong.')
    }
  }

  logOut() {
    this.user = null;
    useUnauthorizedLayout();
  }
}

function useUnauthorizedLayout() {
  document.getElementById('signup-link').style.display = 'block';
  document.getElementById('login-link').style.display = 'block';
  document.getElementById('logout-link').style.display = 'none';
  document.getElementById('create-link').style.display = 'none';

  let loginLink = document.querySelector('.header-login');
  loginLink.textContent = 'Log in';
  loginLink.onclick = () => {
      onNavigate('/login');return false;
  };
  let signupLink = document.querySelector('.header-signup');
  signupLink.textContent = 'Sign up';
  signupLink.onclick = () => {
    onNavigate('/register');return false;
  };
}

function useAuthorizedLayout() {
  document.getElementById('signup-link').style.display = 'none';
  document.getElementById('login-link').style.display = 'none';
  document.getElementById('logout-link').style.display = 'block';
  document.getElementById('create-link').style.display = 'block';

  let loginLink = document.querySelector('.header-login');
  loginLink.textContent = authService.user;
  loginLink.onclick = () => {
      return false;
  };
  let signupLink = document.querySelector('.header-signup');
  signupLink.textContent = 'Log out';
  signupLink.onclick = () => {
    authService.logOut();return false;
  };
}

let authService = new AuthService();
useUnauthorizedLayout();
