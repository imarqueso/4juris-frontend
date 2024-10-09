document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Previne o envio padrão do formulário

  const email = document.getElementById('email').value; // Obtém o valor do campo de email
  const password = document.getElementById('password').value; // Obtém o valor do campo de senha

  fetch('http://localhost:8000/api/login', { // URL da rota de login
    method: 'POST', // Método da requisição
    headers: {
      'Content-Type': 'application/json', // Define o tipo do conteúdo
    },
    body: JSON.stringify({ // Envia o corpo da requisição
      email: email,
      password: password,
    })
  })
    .then(response => {
      if (!response.ok) { // Verifica se a resposta não é 200 OK
        throw new Error('Login falhou'); // Lança um erro
      }
      return response.json(); // Retorna a resposta como JSON
    })
    .then(data => {
      console.log(data); // Exibe os dados no console (para depuração)
      localStorage.setItem('token', data.token); // Armazena o token no localStorage
      window.location.href = 'dashboard.html'; // Redireciona para a página de dashboard
    })
    .catch(error => {
      console.error('Erro:', error); // Exibe erros no console
      document.getElementById('error-message').innerText = error.message; // Exibe mensagem de erro na tela
    });
});
