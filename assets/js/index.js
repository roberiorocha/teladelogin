const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulação de autenticação
   if (username === 'admin' && password === '123') {
    alert('Login efetuado com sucesso!');
    // Redirecionar para a página principal
    window.location.href = 'assets/html/pagina-principal.html';
  } else {
    alert('Usuário ou senha inválidos!');
  }

});



