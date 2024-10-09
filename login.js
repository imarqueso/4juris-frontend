document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('http://localhost:8000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Login falhou');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      localStorage.setItem('token', data.token);
      window.location.href = 'dashboard.html';
    })
    .catch(error => {
      console.error('Erro:', error);
      document.getElementById('error-message').innerText = error.message;
    });
});
