const form = document.getElementById('login-form');


const register = document.getElementById('register').value;
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const password2 = document.getElementById('password2').value;
const endereco = document.getElementById('endereco').value;
const telefone = document.getElementById('telefone').value;


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulação de autenticação
  if (username === 'email' && password === '12345678') {
    alert('Login efetuado com sucesso!');
    // Redirecionar para a página principal
    // window.location.href = 'pagina-principal.html';
  } else {
    alert('Usuário ou senha inválidos!');
  }

});