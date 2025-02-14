// Seleciona elementos do formulário e da área de exibição de usuários
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const favoritInput = document.getElementById('film');  // Corrigido o ID para 'film'
const userList = document.querySelector('#user-list ul');

// Função para adicionar usuário na lista
function addUser(name, email, favorit) {
    const listItem = document.createElement('li');
    listItem.textContent = `Nome: ${name} | E-mail: ${email} | Filme Favorito: ${favorit}`;
    userList.appendChild(listItem);
}

// Evento para capturar e exibir os dados do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const favorit = favoritInput.value.trim();  // Corrigido para usar favoritInput

    if (name && email && favorit) {
        addUser(name, email, favorit); // Adiciona usuário na lista
        form.reset(); // Reseta os campos do formulário
    } else {
        alert("Preencha todos campos Casca De Bala!");  // Mensagem de alerta mais clara
    }
});