function submitLoginForm() {
    let login = document.getElementById('login-input').value;
    let password = document.getElementById('password-input').value;

    authService.logIn(login, password);
  }
  
  function submitRegisterForm() {
    let login = document.getElementById('login-input').value;
    let password = document.getElementById('password-input').value;
    let passwordAgain = document.getElementById('password-input-again').value;
  
    if (password != passwordAgain) {
      alert("Passwords are different.")
      return;
    }
    
    authService.signUp(login, password);
  }
  