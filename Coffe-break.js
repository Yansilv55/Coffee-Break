document.addEventListener('DOMContentLoaded', () => {
    const sideMenu = document.getElementById('sideMenu');
    
    // Exibe a seção Carrinho no início da página
    showSection('carrinho-certo');
    
    // Alterna o menu lateral
    window.toggleMenu = function () {
        sideMenu.classList.toggle('open');
    };

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', (event) => {
        if (!sideMenu.contains(event.target) && !event.target.closest('.menu-toggle') && sideMenu.classList.contains('open')) {
            sideMenu.classList.remove('open');
        }
    });

    // Adiciona evento aos botões com a classe "button-coffe" para exibir notificação
    document.querySelectorAll('.button-coffe').forEach(button => {
        button.addEventListener('click', () => {
            showNotification("Adicionado com sucesso!");
        });
    });

    // Botão "Adicionar Produto" - exibe a seção "Fazer Pedido"
    document.getElementById('addProductButton').addEventListener('click', () => {
        showSection('lista-itens');
        showNotification("Adicionado com sucesso!");
    });
});

// Função para exibir uma seção específica
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Função para exibir a notificação de sucesso
function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    document.body.appendChild(notification);

    // Exibe a notificação e a oculta após 3 segundos
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
        notification.remove();
    }, 3000);
}







/*Tela de login*/
const loginForm = document.getElementById('loginForm');


loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
 
    
    // Se o login for bem-sucedido, redireciona para a outra página
    window.location.href = 'index.html'; 
});






