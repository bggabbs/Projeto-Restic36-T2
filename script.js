document.addEventListener('DOMContentLoaded', function () {
    // Aqui eu estou pegando o formulário e o elemento de feedback
    var essayForm = document.getElementById('essayForm');
    var feedbackElement = document.getElementById('feedback');
    if (essayForm) {
        essayForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Previne o comportamento padrão de envio do formulário
            // Pegando os valores dos campos do formulário
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var essay = document.getElementById('essay').value;
            var feedbackMethod = document.getElementById('feedback-method').value;
            var specialConsiderations = document.getElementById('special-considerations').value;
            var difficulties = document.getElementById('difficulties').value;
            // Verificando se todos os campos obrigatórios estão preenchidos
            if (name && email && essay) {
                feedbackElement.textContent = 'Sua redação foi enviada com sucesso!';
                feedbackElement.className = 'feedback-message success'; // Aplica o estilo de sucesso
            }
            else {
                feedbackElement.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                feedbackElement.className = 'feedback-message error'; // Aplica o estilo de erro
            }
            // Exibe a mensagem de feedback
            feedbackElement.style.opacity = '1';
            feedbackElement.style.transform = 'translateY(0)';
        });
    }
});
