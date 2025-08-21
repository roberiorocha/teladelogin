const form = document.getElementById('login-form');

//const register = document.getElementById('register');
//const name = document.getElementById('name');
//const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
//const endereco = document.getElementById('endereco');
//const telefone = document.getElementById('telefone');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const password = document.getElementById('password').value;
  const password2 = document.getElementById('password2').value;

  // Simulação de autenticação
   if (password.value === password2.value) {
    alert('Cadastro efetuado com sucesso!');
    // Redirecionar para a página principal
    //window.location.href = 'pagina-principal.html';
  } else {
    alert('Senhas estão diferentes!');
  }

});



