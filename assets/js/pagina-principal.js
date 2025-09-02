
// Simulação de dados do usuário
const usuario = {
      nome: "João Pedro",
      foto: ""
    };

    // Atualiza o nome do usuário na tela
    document.getElementById("nome-usuario").innerText = usuario.nome;
    document.getElementById("nome-usuario-direita").innerText = usuario.nome;

    // Função para carregar a foto do usuário
    document.getElementById("foto-usuario").addEventListener("change", (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        document.getElementById("foto-usuario-preview").src = reader.result;
      };
      reader.readAsDataURL(file);
    });

