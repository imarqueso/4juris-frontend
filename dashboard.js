async function fetchClients() {
  const token = localStorage.getItem('token');

  const response = await fetch('http://localhost:8000/api/clientes', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const data = await response.json();

  if (response.ok) {
    const clientList = document.getElementById('clientList');
    data.forEach(client => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${client.id}</td>
        <td>${client.cliente_nome}</td>
        <td>${client.empresa_nome}</td>
        <td>${client.usuario_nome}</td>
      `;
      clientList.appendChild(row);
    });
  } else {
    alert('Erro ao carregar clientes.');
  }
}

document.addEventListener('DOMContentLoaded', fetchClients);
